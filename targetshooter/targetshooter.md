
# Target Shooter Game

targetshooter.html is the game itself, it is mostly working, but will need some fixes and quality tweaks:


~We need to change the background and doll placement to use the provided image map below. When more than half of the doll leaves its assigned spawn zone it can be considered hit.
~Doll starting positioning needs to be rotated on the horizontal axis by 90-degrees counter clockwise to face forward.
~Shooting fails to track with where you actually click- it only fires in the center.
~Players get points for shooting dolls. Dolls disappear after a short time if not hit, with the window of opportunity based on difficulty tier.
~Round system with progressive difficulty increase. As rounds progress, dolls are present in zones for less time.
~Bonus dolls (rendered with glow effect) can occasionally spawn for a bonus upgrade to projectile size and weight for 10 seconds.
~Use our existing doll models that are in the folder, there are over a dozen of them to choose from and we can cycle through them.
~Any space more than 50% outside of the bounding box of each target platform below can be considered a hit.


## Target Shooter Game Board and Image Map:


<map name="image-map">
    <area target="" alt="Rear Target 1" title="Rear Target 1" href="" coords="918,517,1053,670" shape="rect">
    <area target="" alt="Rear Target 2" title="Rear Target 2" href="" coords="1118,515,1242,673" shape="rect">
    <area target="" alt="Rear Target 3" title="Rear Target 3" href="" coords="1317,513,1437,675" shape="rect">
    <area target="" alt="Rear Target 4" title="Rear Target 4" href="" coords="1514,512,1637,676" shape="rect">
    <area target="" alt="Rear Target5" title="Rear Target5" href="" coords="1701,511,1837,675" shape="rect">
    <area target="" alt="Middle Target 1" title="Middle Target 1" href="" coords="729,559,921,799" shape="rect">
    <area target="" alt="Middle Target 2" title="Middle Target 2" href="" coords="1019,558,1192,803" shape="rect">
    <area target="" alt="Middle Target 3" title="Middle Target 3" href="" coords="1295,558,1454,800" shape="rect">
    <area target="" alt="Middle Target 4" title="Middle Target 4" href="" coords="1561,556,1734,802" shape="rect">
    <area target="" alt="Middle Target 5" title="Middle Target 5" href="" coords="1828,554,2017,799" shape="rect">
    <area target="" alt="Near Target 1" title="Near Target 1" href="" coords="823,689,1108,1027" shape="rect">
    <area target="" alt="Near Target 2" title="Near Target 2" href="" coords="1253,691,1501,1026" shape="rect">
    <area target="" alt="Near Target 3" title="Near Target 3" href="" coords="1645,689,1927,1030" shape="rect">
</map>



## Attract Image:

To be used on the other game pages. We should now use a 3x2 grid for the game thumbnails so they stay neat and tidy.

C:\Users\Lulu\Desktop\blackjackwithdiapers\targetshooter\diaperdollroundupattract.webp



## Target Shooter Tweaks and Additions

~powerup duration should be 30% shorter
~powerup frequency should be reduced 25%
~after round 10, dolls have a chance of doing a short vertical hop to make them harder to hit.
~dolls should stay on screen for 20% less time
~headshot multiplier increased from 1.5x to 1.8x
~hard mode:
    -adds a short shot delay, of about .2 seconds
    -6 shot magazine (press R to reload)
    -dolls appear for 35% less time to start and stay on the platform for shorter durations.
    -dolls appear 20% more frequently.
    -headshot multiplier increased to 2.0x
    -headshot location reduced to 20% of top of model
    -powerup duration should be 30% shorter
    -powerup frequency should be reduced 25%