// casinoSaveManager.js
// Handles persisting, exporting/importing, and auditing casino session bankrolls & histories.
(function () {
    const SAVE_KEY = 'lulus_casino_save';

    // Retrieve raw save data
    function getSaveData() {
        try {
            const raw = localStorage.getItem(SAVE_KEY);
            if (raw) {
                return JSON.parse(raw);
            }
        } catch (e) {
            console.error("Failed to parse casino save data from localStorage:", e);
        }
        return getInitialSaveData();
    }

    // Default template for a new session
    function getInitialSaveData() {
        return {
            version: "1.0.0",
            lastUpdated: new Date().toISOString(),
            sharedBankroll: 200, // Starting default for low-roller
            highScores: {
                targetshooter: 0
            },
            history: [
                {
                    timestamp: new Date().toISOString(),
                    game: "system",
                    bet: 0,
                    outcome: "initialize",
                    payout: 200,
                    details: {
                        note: "New session initialized"
                    }
                }
            ]
        };
    }

    // Saves data to localStorage
    function saveToStorage(data) {
        data.lastUpdated = new Date().toISOString();
        // Recalculate checksum/integrity check
        data.sharedBankroll = auditLedgerSum(data.history);
        localStorage.setItem(SAVE_KEY, JSON.stringify(data));
        // Dispatch local event for cross-tab syncing
        window.dispatchEvent(new Event('casinoSaveUpdated'));
    }

    // Replays history to calculate the correct bankroll sum (integrity check)
    function auditLedgerSum(history) {
        let sum = 0;
        if (!Array.isArray(history)) return sum;
        for (let tx of history) {
            const payout = parseFloat(tx.payout);
            if (!isNaN(payout)) {
                sum += payout;
            }
        }
        return sum;
    }

    // Expose APIs
    window.CasinoSaveManager = {
        // Get current shared wallet balance
        getBankroll: function () {
            const data = getSaveData();
            return data.sharedBankroll;
        },

        // Get targetshooter or other high scores
        getHighScore: function (game) {
            const data = getSaveData();
            return (data.highScores && data.highScores[game]) || 0;
        },

        // Update targetshooter or other high scores
        updateHighScore: function (game, score) {
            const data = getSaveData();
            if (!data.highScores) data.highScores = {};
            if (score > (data.highScores[game] || 0)) {
                data.highScores[game] = score;
                // Log high score achievement in the ledger
                this.addTransaction("system", 0, "highscore", 0, {
                    note: `New targetshooter highscore: ${score}`
                });
            }
        },

        // Adds a standard betting/game transaction to the history ledger
        addTransaction: function (game, bet, outcome, payout, details = {}) {
            const data = getSaveData();
            const tx = {
                timestamp: new Date().toISOString(),
                game: game,
                bet: parseFloat(bet) || 0,
                outcome: outcome,
                payout: parseFloat(payout) || 0,
                details: details
            };
            data.history.push(tx);
            saveToStorage(data);
        },

        // Manual deposit/buy-in
        addFunds: function (amount, note = "") {
            const amt = parseFloat(amount);
            if (isNaN(amt) || amt <= 0) return;
            this.addTransaction("system", 0, "add_funds", amt, {
                note: note || "Manual deposit"
            });
        },

        // Manual cash-out
        cashOut: function (amount, note = "") {
            const amt = parseFloat(amount);
            if (isNaN(amt) || amt <= 0) return;
            // Cash out subtracts funds from active wallet
            this.addTransaction("system", 0, "cash_out", -amt, {
                note: note || "Manual cash-out"
            });
        },

        // Reset session bankroll completely (starting fresh)
        resetBankroll: function (startingAmount = 200, note = "Session reset") {
            const amt = parseFloat(startingAmount);
            const data = {
                version: "1.0.0",
                lastUpdated: new Date().toISOString(),
                sharedBankroll: amt,
                highScores: getSaveData().highScores || { targetshooter: 0 },
                history: [
                    {
                        timestamp: new Date().toISOString(),
                        game: "system",
                        bet: 0,
                        outcome: "reset",
                        payout: amt,
                        details: {
                            note: note
                        }
                    }
                ]
            };
            saveToStorage(data);
        },

        // Download save as JSON file
        exportSave: function () {
            const data = getSaveData();
            // Wrap in a tamper-evident Base64 bundle for export
            const jsonStr = JSON.stringify(data, null, 2);
            const exportBundle = {
                data: btoa(unescape(encodeURIComponent(jsonStr))),
                checksum: btoa(auditLedgerSum(data.history).toString())
            };
            const blob = new Blob([JSON.stringify(exportBundle, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `lulus_casino_session_${new Date().toISOString().split('T')[0]}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        },

        // Upload and parse JSON file, verifying history
        importSave: function (jsonStr, callback) {
            try {
                const bundle = JSON.parse(jsonStr);
                if (!bundle.data || !bundle.checksum) {
                    throw new Error("Invalid save file format (missing payload/checksum)");
                }

                // Decode Base64 payload
                const decodedJson = decodeURIComponent(escape(atob(bundle.data)));
                const data = JSON.parse(decodedJson);

                if (!Array.isArray(data.history)) {
                    throw new Error("Invalid save file history ledger");
                }

                // Verify ledger integrity
                const ledgerSum = auditLedgerSum(data.history);
                const expectedChecksum = atob(bundle.checksum);

                if (ledgerSum.toString() !== expectedChecksum) {
                    throw new Error("Ledger checksum mismatch! The save file has been tampered with.");
                }

                // Force bankroll sync
                data.sharedBankroll = ledgerSum;
                localStorage.setItem(SAVE_KEY, JSON.stringify(data));
                window.dispatchEvent(new Event('casinoSaveUpdated'));

                if (callback) callback(null, data.sharedBankroll);
            } catch (e) {
                console.error("Save import error:", e);
                if (callback) callback(e);
            }
        },

        // Subscribes UI components to real-time wallet sync events (cross-tab/game updates)
        onUpdate: function (callback) {
            window.addEventListener('casinoSaveUpdated', () => {
                callback(this.getBankroll(), this.getHighScore('targetshooter'));
            });
            // Also listen to storage events directly (for other browser tabs/windows)
            window.addEventListener('storage', (e) => {
                if (e.key === SAVE_KEY) {
                    window.dispatchEvent(new Event('casinoSaveUpdated'));
                }
            });
        }
    };
})();
