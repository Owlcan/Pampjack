# Roulette


Assume the roulette board will be named "board.webp" and assume the wheel will be named "wheel.webp" and assume "ball.webp" will be the roulette ball.  Assume they will be in the same folder as the applet.

## Character Reaction Images

The dealer/croupier for the roulette game, these are her reactions/expressions.

rouletteclare.webp
rouletteclare_win.webp
rouletteclare_loss.webp


## Game Board Layout

These use the above images as their base. The wheel and board are layered over them in the corresponding areas.

### REMINDER: The layout image is 2k. The image map above corresponds to this layout. In the html and css files, try to use percentages as much as possible for the layout so that the game will need to be able to adapt to a 1080p screen so that the maximum number of users can use the game with a comfortable experience.

<map name="image-map">
    <area target="" alt="Roulette Board" title="Roulette Board" href="" coords="35,1245,2733,2757" shape="rect">
    <area target="" alt="Roulette Wheel" title="Roulette Wheel" href="" coords="2,-2,1114,1121" shape="rect">
</map>

for visual aide see the image 
C:\Users\Lulu\Desktop\blackjackwithdiapers\layout rough example.png

## Roulette Betting Board Image Map

This is the layout of the betting board, it is a lengthwise rectangle, and is stored as board.webp

<map name="image-map">
    <area target="" alt="0" title="0" href="" coords="929,152,530,220,527,323,1335,325,1331,220" shape="poly">
    <area target="" alt="1" title="1" href="" coords="527,339,789,496" shape="rect">
    <area target="" alt="2" title="2" href="" coords="799,338,1061,497" shape="rect">
    <area target="" alt="3" title="3" href="" coords="1073,337,1336,496" shape="rect">
    <area target="" alt="4" title="4" href="" coords="523,505,787,672" shape="rect">
    <area target="" alt="5" title="5" href="" coords="798,506,1062,668" shape="rect">
    <area target="" alt="6" title="6" href="" coords="1075,507,1336,668" shape="rect">
    <area target="" alt="7" title="7" href="" coords="526,676,788,840" shape="rect">
    <area target="" alt="8" title="8" href="" coords="801,682,1062,838" shape="rect">
    <area target="" alt="9" title="9" href="" coords="1075,681,1335,840" shape="rect">
    <area target="" alt="10" title="10" href="" coords="528,852,787,1015" shape="rect">
    <area target="" alt="11" title="11" href="" coords="801,852,1063,1017" shape="rect">
    <area target="" alt="12" title="12" href="" coords="1074,853,1334,1017" shape="rect">
    <area target="" alt="13" title="13" href="" coords="529,1026,786,1192" shape="rect">
    <area target="" alt="14" title="14" href="" coords="801,1025,1061,1191" shape="rect">
    <area target="" alt="15" title="15" href="" coords="1074,1026,1337,1193" shape="rect">
    <area target="" alt="16" title="16" href="" coords="530,1207,786,1369" shape="rect">
    <area target="" alt="17" title="17" href="" coords="799,1203,1059,1370" shape="rect">
    <area target="" alt="18" title="18" href="" coords="1076,1203,1336,1370" shape="rect">
    <area target="" alt="19" title="19" href="" coords="529,1383,787,1550" shape="rect">
    <area target="" alt="20" title="20" href="" coords="800,1382,1059,1549" shape="rect">
    <area target="" alt="21" title="21" href="" coords="1074,1381,1334,1549" shape="rect">
    <area target="" alt="22" title="22" href="" coords="530,1561,787,1733" shape="rect">
    <area target="" alt="23" title="23" href="" coords="801,1561,1060,1731" shape="rect">
    <area target="" alt="24" title="24" href="" coords="1074,1562,1337,1730" shape="rect">
    <area target="" alt="25" title="25" href="" coords="528,1745,787,1913" shape="rect">
    <area target="" alt="26" title="26" href="" coords="801,1741,1060,1912" shape="rect">
    <area target="" alt="27" title="27" href="" coords="1075,1742,1338,1912" shape="rect">
    <area target="" alt="28" title="28" href="" coords="526,1925,786,2097" shape="rect">
    <area target="" alt="29" title="29" href="" coords="801,1922,1063,2095" shape="rect">
    <area target="" alt="30" title="30" href="" coords="1076,1929,1336,2099" shape="rect">
    <area target="" alt="31" title="31" href="" coords="528,2109,786,2281" shape="rect">
    <area target="" alt="32" title="32" href="" coords="802,2109,1058,2279" shape="rect">
    <area target="" alt="33" title="33" href="" coords="1075,2108,1337,2279" shape="rect">
    <area target="" alt="34" title="34" href="" coords="527,2293,785,2462" shape="rect">
    <area target="" alt="35" title="35" href="" coords="801,2291,1061,2461" shape="rect">
    <area target="" alt="36" title="36" href="" coords="1074,2291,1334,2461" shape="rect">
    <area target="" alt="Column 1 2 to 1" title="Column 1 2 to 1" href="" coords="528,2475,788,2633" shape="rect">
    <area target="" alt="Column 2 2 to 1" title="Column 2 2 to 1" href="" coords="797,2472,1063,2634" shape="rect">
    <area target="" alt="Column 3 2 to 1" title="Column 3 2 to 1" href="" coords="1075,2473,1336,2635" shape="rect">
    <area target="" alt="1st 12" title="1st 12" href="" coords="339,336,515,1016" shape="rect">
    <area target="" alt="2nd 12" title="2nd 12" href="" coords="338,1028,517,1731" shape="rect">
    <area target="" alt="3rd 12" title="3rd 12" href="" coords="338,1743,515,2464" shape="rect">
    <area target="" alt="Odd" title="Odd" href="" coords="149,1744,328,2084" shape="rect">
    <area target="" alt="Even" title="Even" href="" coords="148,679,328,1016" shape="rect">
    <area target="" alt="Blue" title="Blue" href="" coords="148,1381,325,1726" shape="rect">
    <area target="" alt="Silver" title="Silver" href="" coords="149,1026,325,1371" shape="rect">
    <area target="" alt="1-18" title="1-18" href="" coords="149,337,325,667" shape="rect">
    <area target="" alt="19-36" title="19-36" href="" coords="149,2098,326,2462" shape="rect">
</map>

## Roulette Wheel Image Map:

<map name="image-map">
    <area target="" alt="0" title="0" href="" coords="953,120,965,306,1086,310,1102,120" shape="poly">
    <area target="" alt="32" title="32" href="" coords="1105,120,1252,149,1204,329,1090,309" shape="poly">
    <area target="" alt="15" title="15" href="" coords="1256,149,1401,198,1322,371,1203,329" shape="poly">
    <area target="" alt="19" title="19" href="" coords="1404,199,1533,274,1428,429,1322,371" shape="poly">
    <area target="" alt="4" title="4" href="" coords="1539,272,1654,365,1521,509,1427,434" shape="poly">
    <area target="" alt="21" title="21" href="" coords="1656,370,1757,485,1599,597,1524,509" shape="poly">
    <area target="" alt="2" title="2" href="" coords="1758,487,1837,615,1667,703,1601,599" shape="poly">
    <area target="" alt="25" title="25" href="" coords="1837,617,1893,757,1713,812,1668,704" shape="poly">
    <area target="" alt="17" title="17" href="" coords="1710,812,1897,757,1929,915,1736,936" shape="poly">
    <area target="" alt="34" title="34" href="" coords="1928,912,1932,1066,1739,1055,1736,938" shape="poly">
    <area target="" alt="6" title="6" href="" coords="1739,1055,1931,1066,1912,1214,1728,1171" shape="poly">
    <area target="" alt="27" title="27" href="" coords="1726,1178,1911,1218,1867,1361,1692,1292" shape="poly">
    <area target="" alt="13" title="13" href="" coords="1863,1366,1799,1500,1636,1401,1688,1293" shape="poly">
    <area target="" alt="36" title="36" href="" coords="1633,1403,1796,1501,1706,1622,1568,1496" shape="poly">
    <area target="" alt="11" title="11" href="" coords="1559,1499,1704,1627,1598,1729,1477,1581" shape="poly">
    <area target="" alt="30" title="30" href="" coords="1470,1585,1593,1731,1467,1818,1376,1649" shape="poly">
    <area target="" alt="8" title="8" href="" coords="1372,1653,1465,1819,1328,1880,1265,1699" shape="poly">
    <area target="" alt="23" title="23" href="" coords="1260,1701,1325,1885,1179,1918,1147,1729" shape="poly">
    <area target="" alt="10" title="10" href="" coords="1147,1729,1177,1919,1027,1927,1024,1738" shape="poly">
    <area target="" alt="5" title="5" href="" coords="1020,1741,1022,1929,873,1915,906,1731" shape="poly">
    <area target="" alt="24" title="24" href="" coords="904,1729,867,1915,723,1875,787,1700" shape="poly">
    <area target="" alt="16" title="16" href="" coords="780,1699,719,1878,586,1816,680,1651" shape="poly">
    <area target="" alt="33" title="33" href="" coords="670,1647,581,1818,455,1729,575,1581" shape="poly">
    <area target="" alt="1" title="1" href="" coords="573,1581,452,1727,347,1626,486,1501" shape="poly">
    <area target="" alt="20" title="20" href="" coords="486,1494,344,1621,253,1501,415,1402" shape="poly">
    <area target="" alt="14" title="14" href="" coords="410,1400,360,1295,187,1365,253,1499" shape="poly">
    <area target="" alt="31" title="31" href="" coords="358,1292,322,1178,138,1215,184,1362" shape="poly">
    <area target="" alt="9" title="9" href="" coords="322,1172,308,1058,118,1067,136,1217" shape="poly">
    <area target="" alt="22" title="22" href="" coords="308,1054,313,937,122,912,116,1060" shape="poly">
    <area target="" alt="18" title="18" href="" coords="314,934,336,812,156,763,124,909" shape="poly">
    <area target="" alt="29" title="29" href="" coords="336,814,385,705,214,617,156,757" shape="poly">
    <area target="" alt="7" title="7" href="" coords="384,698,447,598,293,488,216,613" shape="poly">
    <area target="" alt="28" title="28" href="" coords="446,597,528,509,398,370,296,483" shape="poly">
    <area target="" alt="12" title="12" href="" coords="516,272,620,432,531,505,401,367" shape="poly">
    <area target="" alt="35" title="35" href="" coords="624,429,731,370,652,195,522,269" shape="poly">
    <area target="" alt="3" title="3" href="" coords="731,369,844,330,795,148,654,195" shape="poly">
    <area target="" alt="26" title="26" href="" coords="802,145,947,120,963,309,847,329" shape="poly">
</map>


## Considerations and notes:

Rules can follow standard roulette rules. The board can be spun simply by rotating it from the center in a clockwise direction. The ball can then appear 10px below the section it landed on to denote the final result.

There can be 2 levels of roulette games, high and low roller.

We can reuse the coins we have in the blackjack game.