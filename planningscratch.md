

# Slot Machines

We are going to make a slot machine game that will also launch from the main menu. No matter changes will be needed, but a third menu icon will need to be added.

This will be another self-contained game accessed through the main menu like blackjack and hold'em.


This is the icon, AND the background for the webpage at full size.
C:\Users\Lulu\Desktop\blackjackwithdiapers\slots\slotmachinegallery.webp


This is the image map to be used to select the slot machine from the game page. Each game page has its own image and map to make things much easier.
<map name="image-map">
    <area target="" alt="Pretty Princess Slots" title="Pretty Princess Slots" href="" coords="643,316,90,1559" shape="rect">
    <area target="" alt="Deluxe Super-Stal Slots" title="Deluxe Super-Stal Slots" href="" coords="646,320,1212,1563" shape="rect">
    <area target="" alt="Big Bab Bounty Slots" title="Big Bab Bounty Slots" href="" coords="1224,320,1810,1567" shape="rect">
    <area target="" alt="Padded Prince Slots" title="Padded Prince Slots" href="" coords="1820,320,2327,1569" shape="rect">
</map>

~ Since each icon is a static image, we will simulate spinning by cycling the icons with a staggered timing in each reel of the machine. Probability of a reel landing on a certain icon should be weighted by the scale of the payout. Silver bears and prince dollars and stal's should be rarer than the other icons by far. These are dictated by the payout, so higher payout, more rare the icon. 

## Layout

The main layout image should be blurred and darkened, when a machine is chosen, opening a full-screen gold-bordered image of the machine as detailed below for each slot machine.

## Pretty Princess Slots:

This is the game play area for the Pretty Princess Slots game.
C:\Users\Lulu\Desktop\blackjackwithdiapers\slots\prettyprincessslots.webp

### Pretty Princess Slot Payouts:

"C:\Users\Lulu\Desktop\blackjackwithdiapers\slots\pp_payouts.webp"

3 diaper school logos: 2 to 1
3 pacifiers: 3 to 1
3 bib icons: 3 to 1
3 bottle icons: 3 to 1
3 paddle icons: 5 to 1
3 handheld game consoles: 5 to 1
3 diaper packs: 5 to 1
3 princess dolls: 10 to 1


<map name="image-map">
    <area target="" alt="Payout Chart" title="Payout Chart" href="" coords="577,564,1198,769" shape="rect">
    <area target="" alt="Pull Lever" title="Pull Lever" href="" coords="1315,1059,1459,1532" shape="rect">
    <area target="" alt="Add Bet" title="Add Bet" href="" coords="754,1536,664,1471" shape="rect">
    <area target="" alt="Remove Bet" title="Remove Bet" href="" coords="537,1477,632,1534" shape="rect">
    <area target="" alt="Slot 1" title="Slot 1" href="" coords="625,1176,769,1287" shape="rect">
    <area target="" alt="Slot 2" title="Slot 2" href="" coords="822,1173,974,1289" shape="rect">
    <area target="" alt="Slot 3" title="Slot 3" href="" coords="1020,1173,1166,1287" shape="rect">
</map>

### Pretty Princess Slot Imagery:
C:\Users\Lulu\Desktop\blackjackwithdiapers\slots\slotreels\pp_logo.webp
C:\Users\Lulu\Desktop\blackjackwithdiapers\slots\slotreels\pp_paci.webp
C:\Users\Lulu\Desktop\blackjackwithdiapers\slots\slotreels\pp_paddle.webp
C:\Users\Lulu\Desktop\blackjackwithdiapers\slots\slotreels\pp_bottle.webp
C:\Users\Lulu\Desktop\blackjackwithdiapers\slots\slotreels\pp_handheld.webp
C:\Users\Lulu\Desktop\blackjackwithdiapers\slots\slotreels\pp_bib.webp
C:\Users\Lulu\Desktop\blackjackwithdiapers\slots\slotreels\pp_diaperpack.webp
C:\Users\Lulu\Desktop\blackjackwithdiapers\slots\slotreels\pp_doll.webp


## Deluxe Super-Stal Slots:
This is the game play area for the Deluxe Super-Stal Slots game.
C:\Users\Lulu\Desktop\blackjackwithdiapers\slots\superstaldeluxeslots.webp


### Deluxe Super-Stal Slot Payouts:

"C:\Users\Lulu\Desktop\blackjackwithdiapers\slots\dss_payouts.webp"

4 White Diapers: 2 to 1
4 blue and silver diapers: 3 to 1
4 black and red diapers: 3 to 1
4 pink swords: 5 to 1
4 blue swords: 5 to 1
4 Camo Sippy cups: 7 to 1
4 Flower Sippy cups: 7 to 1
4 Lolo: 10 to 1
4 Dere: 10 to 1
4 Stal: 15 to 1
"Funtime Flush":
1 Stal, 1 lolo, 1 dere, 1 white diaper: 20 to 1


<map name="image-map">
    <area target="" alt="Payout Chart" title="Payout Chart" href="" coords="615,654,1161,850" shape="rect">
    <area target="" alt="Pull Lever" title="Pull Lever" href="" coords="1286,1134,1389,1569" shape="rect">
    <area target="" alt="Remove Bet" title="Remove Bet" href="" coords="564,1509,639,1567" shape="rect">
    <area target="" alt="Add Bet" title="Add Bet" href="" coords="670,1507,740,1569" shape="rect">
    <area target="" alt="Slot 1" title="Slot 1" href="" coords="613,1222,724,1330" shape="rect">
    <area target="" alt="Slot 2" title="Slot 2" href="" coords="765,1224,875,1328" shape="rect">
    <area target="" alt="Slot 3" title="Slot 3" href="" coords="919,1225,1030,1330" shape="rect">
    <area target="" alt="Slot 4" title="Slot 4" href="" coords="1069,1222,1185,1328" shape="rect">
</map>

### Deluxe Super-Stal Slots:
C:\Users\Lulu\Desktop\blackjackwithdiapers\slots\slotreels\dss_pinksword.webp
C:\Users\Lulu\Desktop\blackjackwithdiapers\slots\slotreels\dss_bluesword.webp
C:\Users\Lulu\Desktop\blackjackwithdiapers\slots\slotreels\dss_blackdiaper.webp
C:\Users\Lulu\Desktop\blackjackwithdiapers\slots\slotreels\dss_bluediaper.webp
C:\Users\Lulu\Desktop\blackjackwithdiapers\slots\slotreels\dss_dere.webp
C:\Users\Lulu\Desktop\blackjackwithdiapers\slots\slotreels\dss_lolo.webp
C:\Users\Lulu\Desktop\blackjackwithdiapers\slots\slotreels\dss_camosippy.webp
C:\Users\Lulu\Desktop\blackjackwithdiapers\slots\slotreels\dss_whitediaper.webp
C:\Users\Lulu\Desktop\blackjackwithdiapers\slots\slotreels\dss_stal.webp
C:\Users\Lulu\Desktop\blackjackwithdiapers\slots\slotreels\dss_pinksippy.webp

## Big Bab Bounty Slots:
This is the game play area for the Big Bab Bounty Slots game.

### Big Bab Bounty Slot Payouts:

"C:\Users\Lulu\Desktop\blackjackwithdiapers\slots\bbb_payouts.webp"

3 diaper school logos: 2 to 1
3 pacifiers: 3 to 1
3 bib icons: 3 to 1
3 bottle icons: 3 to 1
3 paddle icons: 5 to 1
3 handheld game consoles: 5 to 1
3 diaper packs: 5 to 1
3 silver teddy bears: 10 to 1


C:\Users\Lulu\Desktop\blackjackwithdiapers\slots\bigbabbountyslots.webp

<map name="image-map">
    <area target="" alt="Payout Chart" title="Payout Chart" href="" coords="587,564,1199,763" shape="rect">
    <area target="" alt="Pull Lever" title="Pull Lever" href="" coords="1316,1077,1440,1577" shape="0">
    <area target="" alt="Add Bet" title="Add Bet" href="" coords="674,1515,748,1474" shape="0">
    <area target="" alt="Remove Bet" title="Remove Bet" href="" coords="556,1472,629,1510" shape="0">
    <area target="" alt="Slot 1" title="Slot 1" href="" coords="631,1167,780,1289" shape="0">
    <area target="" alt="Slot 2" title="Slot 2" href="" coords="821,1165,971,1289" shape="0">
    <area target="" alt="Slot 3" title="Slot 3" href="" coords="1011,1162,1160,1290" shape="0">
</map>


### Big Bab Bounty Slot Payouts:

3 diaper school icons: 2 to 1
3 pacifiers: 3 to 1
3 bib icons: 3 to 1
3 bottle icons: 3 to 1
3 paddle icons: 5 to 1
3 handheld game consoles: 5 to 1
3 diaper packs: 5 to 1
3 silver teddy bears: 10 to 1

### Big Bab Bounty Slot Imagery

C:\Users\Lulu\Desktop\blackjackwithdiapers\slots\slotreels\bbb_doll.webp
C:\Users\Lulu\Desktop\blackjackwithdiapers\slots\slotreels\bbb_pack.webp
C:\Users\Lulu\Desktop\blackjackwithdiapers\slots\slotreels\bbb_bib.webp
C:\Users\Lulu\Desktop\blackjackwithdiapers\slots\slotreels\bbb_handheld.webp
C:\Users\Lulu\Desktop\blackjackwithdiapers\slots\slotreels\bbb_bottle.webp
C:\Users\Lulu\Desktop\blackjackwithdiapers\slots\slotreels\bbb_paddle.webp
C:\Users\Lulu\Desktop\blackjackwithdiapers\slots\slotreels\bbb_paci.webp
C:\Users\Lulu\Desktop\blackjackwithdiapers\slots\slotreels\bbb_logo.webp

## Padded Prince Slots:
This is the game play area for the Padded Prince Slots game.

C:\Users\Lulu\Desktop\blackjackwithdiapers\slots\paddedprinceslots.webp

### Padded Prince Slot Payouts:

"C:\Users\Lulu\Desktop\blackjackwithdiapers\slots\prince_payouts.webp"

3 diaper school icons: 2 to 1
3 pacifiers: 3 to 1
3 bib icons: 3 to 1
3 bottle icons: 3 to 1
3 paddle icons: 5 to 1
3 handheld game consoles: 5 to 1
3 diaper packs: 5 to 1
3 prince dolls: 10 to 1

<map name="image-map">
    <area target="" alt="Payout Chart" title="Payout Chart" href="" coords="579,613,1210,825" shape="rect">
    <area target="" alt="Pull Lever" title="Pull Lever" href="" coords="1443,1129,1334,1525" shape="rect">
    <area target="" alt="Add Bet" title="Add Bet" href="" coords="756,1509,677,1545" shape="rect">
    <area target="" alt="Remove Bet" title="Remove Bet" href="" coords="629,1506,550,1542" shape="rect">
    <area target="" alt="Slot 1" title="Slot 1" href="" coords="629,1214,778,1335" shape="rect">
    <area target="" alt="Slot 2" title="Slot 2" href="" coords="820,1214,971,1335" shape="rect">
    <area target="" alt="Slot 3" title="Slot 3" href="" coords="1011,1213,1166,1337" shape="rect">
</map>

### Padded Prince Slot Imagery

C:\Users\Lulu\Desktop\blackjackwithdiapers\slots\slotreels\prince_logo.webp
C:\Users\Lulu\Desktop\blackjackwithdiapers\slots\slotreels\prince_paci.webp
C:\Users\Lulu\Desktop\blackjackwithdiapers\slots\slotreels\prince_paddle.webp
C:\Users\Lulu\Desktop\blackjackwithdiapers\slots\slotreels\prince_bottle.webp
C:\Users\Lulu\Desktop\blackjackwithdiapers\slots\slotreels\prince_handheld.webp
C:\Users\Lulu\Desktop\blackjackwithdiapers\slots\slotreels\prince_bib.webp
C:\Users\Lulu\Desktop\blackjackwithdiapers\slots\slotreels\prince_pack.webp
C:\Users\Lulu\Desktop\blackjackwithdiapers\slots\slotreels\prince_doll.webp



## Sound Effects:

These use the same prefix as the imagery for which slot machine they are assigned. Token, reel, and lever sounds are general use.

pp_theme.mp3
pp_bigwin.mp3
pp_win.mp3

bbb_win.mp3
BBB_theme.mp3
BBB_bigwin.mp3

prince_win.mp3
prince_theme.mp3
prince_bigwin.mp3

dss_theme.mp3
dss_bigwin.mp3
dss_win.mp3

tokenreceived.mp3
token_removed.mp3
slotsspinning.mp3 this is played for each real and stops when the reel stops. Each one should begin with a slight offset to create a sense of realism.
pullthelever.mp3


====================================================================

# Balance, Bet, and Win Sections

## Pretty Princess Slots:

<map name="image-map">
    <area target="" alt="Balance" title="Balance" href="" coords="721,864,1068,958" shape="rect">
    <area target="" alt="Bet and Winning" title="Bet and Win" href="" coords="659,1759,1137,1955" shape="rect">
</map>


## Big Bab Bounty Slots:


<map name="image-map">
    <area target="" alt="Balance" title="Balance" href="" coords="723,858,1073,947" shape="rect">
    <area target="" alt="Bet and Winning" title="Bet and Winning" href="" coords="623,1746,1174,1914" shape="rect">
</map>


## Padded Prince Slots:


<map name="image-map">
    <area target="" alt="Balance" title="Balance" href="" coords="714,909,1082,1004" shape="rect">
    <area target="" alt="Bet and Winning" title="Bet and Winning" href="" coords="723,1767,1065,1954" shape="rect">
</map>


## Deluxe Super-Stal Slots:

<map name="image-map">
    <area target="" alt="Balance" title="Balance" href="" coords="737,937,1057,1023" shape="rect">
    <area target="" alt="Bet and Winning" title="Bet and Winning" href="" coords="620,1773,1139,1939" shape="rect">
</map>

~ These sections should not have a black underlay. Give them a black border around the letters and let the backgrounds be transparent.
~ALL reel images should preserve their existing transparency. They do not need a black underlay.


===================================================================================

# Further tweaks, changes, and modifications

~Bet buttons should have a consistent glow when machine is not "spinning." Glow should have a 15% border blur so that it is rounded.
~These glow effects should have a 30% opacity and use the same color as the slot machine's accent color.
   -Pretty Princess: Pink
   -Padded Prince: light blue
   -Big Bab Bounty: reddish bronze
   -Deluxe Super-Stal: gold
~Lever should have a hover-over glow effect with a 15% border blur and use silver-blue for padded prince, deluxe super-stal, and big bab bounty and use silver-pink for pretty princess.
~All slots need win rates slightly boosted, 5% for big wins and 10% for small wins in the 3-slot machines, and 2.5% and 5% in super-stal.
~"Hidden" payouts should exist: 
    ~in Super-Stal, any combination of 4 diapers should earn a 2 to 1 payout. In super stal, 2-pair of any icons should offer a 3 to 1 payout, as well.
    ~in the other three machines: logo should count as a wildcard when in the center position. A pair of any icon with a logo in the center counts as three of a kind for the purposes of the payout chart, but not for the jackpot. A pair of logos should earn a 2 to 1 payout.
    ~in Big Bab Bounty, any 3-in-a-row combination of a bib, diaper pack, and doll should earn a 2 to 1 payout.
    ~in Padded Prince, any 3-in-a-row combination of a bib, diaper pack, and doll  should earn a 2 to 1 payout.
    ~in Pretty Princess, any 3-in-a-row combination of a bib, diaper pack, and doll  should earn a 2 to 1 payout.
~volume slider, and option to turn off jingle loop without muting all other sounds.


===================================================================================