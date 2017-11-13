from timeit import default_timer as timer

class Root:
  def __init__(self, v):
    self.v = v
    # The left chain holds nodes(from big to small) smaller than root
    self.left = None
    # The right chain holds nodes(from small to bug) bigger than root
    self.right = None

class Node:
  def __init__(self, v):
    self.v = v
    self.child = None
    self.parent = None
    
class Solution:
  """
  Given a positive intergers array, A.
  Find the min dii between 2 integers in A.
  A will at least contain 2 integers.
  No dulplicated integers.
  """
  
  def findBySorting(self, v):
    """
    Slower! Run 10000x below test case.
    The total duration of findBySorting is 2.5307752109365538
    """
    sA = sorted(A)
    lenA = len(sA)
    min = -1
    i = 0
    j = 1
    while j < lenA:
      diff = abs(sA[i] - sA[j])
      if min < 0 or min > diff: min = diff
      i += 1
      j += 1
      # Optimization: 1 is the possible smallest min so early break
      if min == 1: break
    return min
  
  def findByDividingTree(self, A):
    """
    Faster with the optimization! Run 10000x below test case.
    The total duration of findByDividingTree is 0.5165035830577835.
    But slower without the optimization.
    """
    root = Root(A[0])
    lenA = len(A)
    min = -1
    for i in range(1, lenA):
      n = Node(A[i])
      if n.v < root.v:
        if not root.left:
          root.left = n
          n.parent = root
        else:
          l = root.left
          while l:
            if n.v > l.v:
              p = l.parent
              p.child = n
              n.parent = p
              n.child = l
              l.parent = n
              l = None
            else:
              if l.child:
                l = l.child
              else:
                l.child = n
                n.parent = l
                l = None
      else:
          if not root.right:
            root.right = n
            n.parent = root
          else:
            r = root.right
            while r:
              if n.v < r.v:
                p = r.parent
                p.child = n
                n.parent = p
                n.child = r
                r.parent = n
                r = None
              else:
                if r.child:
                  r = r.child
                else:
                  r.child = n
                  n.parent = r
                  r = None
      diff = abs(n.v - n.parent.v)
      if min < 0 or min > diff:
        min = diff
      if n.child:
        diff = abs(n.v - n.child.v)
        if min > diff: min = diff
      # Optimization: 1 is the possible smallest min so early break
      if min == 1: break
    return min
    
A = [1495,1042,967,1823,1419,1833,1033,1521,991,942,1192,1441,938,1936,954,1084,866,913,1237,1223,1283,1233,1522,1515,828,906,1072,1394,1709,1916,1123,1705,893,840,1079,1738,1520,1953,1623,1173,1513,1186,1901,983,1748,1097,982,1133,1358,1227,1345,1044,1621,996,1615,1175,1819,928,1549,1689,1915,1610,1060,1209,1791,1756,1653,1260,1089,859,1148,1140,1067,1648,912,902,1679,1415,1924,1124,1726,1961,977,1842,1421,1971,1827,805,1424,1013,993,869,1740,1387,1719,1866,1499,887,907,1225,995,1683,1430,1230,868,971,1596,1666,1117,1144,829,853,1301,1385,1932,1028,1781,1403,1942,1417,1865,1941,1563,924,1908,1811,918,1828,1071,1295,1110,845,1171,863,1567,1372,1746,1018,1703,1047,1566,1132,1483,1871,1662,1170,919,1435,1351,1863,1651,905,1539,1476,1974,1200,812,1204,1554,1003,1008,978,874,1305,1572,1545,1275,947,1374,1676,878,873,1366,1045,1834,831,1120,1914,1279,1895,1820,1626,1093,1697,1482,1553,872,1798,1243,1534,1288,1663,1040,1693,832,1026,1085,1991,1659,1232,1531,980,1669,1899,1350,1541,1854,1277,1027,1442,1540,927,1168,1931,1039,1128,1829,1108,1969,1229,988,923,915,1883,823,1846,1317,1348,1486,1340,998,1231,948,1290,1389,1876,1213,836,1972,1523,890,1267,1712,1742,1617,1711,1357,1573,1984,1474,1012,1532,1219,1400,1058,1304,1918,1194,900,969,1688,1336,1592,1956,879,1118,1607,1873,1681,1485,1506,1752,1014,1049,1759,1102,1561,1963,825,957,970,1649,1655,1325,1031,1488,1112,1950,1806,1111,1142,1694,1038,1650,1182,1467,1634,1817,1053,1613,1390,1281,822,1256,1214,1686,1770,1068,1979,1022,1848,808,1973,1464,1570,1264,1643,833,1665,1135,1785,1945,916,1923,1445,1329,1298,1119,1015,1359,1753,1353,1556,1600,1401,1379,1637,1839,1516,1383,961,917,1560,1368,1852,1291,1444,1620,1618,1268,1426,1422,1568,1241,944,1699,846,903,1313,1259,1837,1687,1978,1347,895,1019,1517,1335,1341,1035,1276,1228,1708,1166,1152,1391,1289,1896,1736,1094,925,1797,1675,1356,1887,945,1989,1162,1786,1122,1179,904,1664,807,986,842,1535,1063,1910,1114,821,1690,1078,1947,973,839,958,1877,1799,1919,1469,1775,1602,1544,1881,1437,1339,1392,1582,1922,1831,1674,1960,1059,1769,1638,987,1091,1099,932,818,1695,1396,1616,1571,1700,1315,1977,885,1789,854,1954,1527,1800,1698,1998,849,1274,1250,899,1300,1619,1730,1004,1149,1940,1470,802,1822,1050,1591,1203,1025,1036,1319,1254,1955,1083,838,935,1462,1002,1125,1062,959,1468,1247,1069,881,1717,1098,1507,1187,1905,1926,1906,1311,1054,1805,1718,1057,1949,1431,936,870,1206,1859,1021,1242,1157,1538,1546,1314,1310,1297,972,1377,1349,1408,1287,1156,1696,937,1758,1189,875,1006,889,1946,1912,910,1324,1939,1907,848,1951,994,1333,1601,1484,1459,1257,1841,1463,1838,1647,1420,1702,1670,1682,1720,1737,1023,1927,1933,811,1715,1174,1145,1443,1154,1338,1429,1824,857,1096,1580,1692,1764,1747,940,1594,1625,1729,1215,1710,1428,1605,1362,1612,1807,1418,1016,1595,1548,1172,886,843,1855,1107,1151,1318,1436,1733,1451,1832,1550,1672,1466,1536,1240,1455,1787,1460,1810,1030,1235,1864,1416,1065,1177,1261,1501,1584,949,1750,981,1704,1958,815,1246,1106,1221,1505,1165,1190,1728,1857,933,1802,1524,1404,1673,844,1903,837,1321,1723,1129,1207,809,1077,1181,1794,810,1266,1645,1784,1397,1303,1262,1343,1218,1141,1624,1843,1627,1937,1818,1986,909,1604,1253,1316,1565,1302,1898,1411,939,1631,930,1082,964,1783,1677,1660,1210,920,816,1622,1980,814,1245,1767,968,1489,896,1911,1930,1671,855,953,1440,847,1309,1992,1496,1921,1056,1252,867,1913,1284,1193,1169,1611,1075,1244,1880,1073,1134,1150,1326,1721,1994,1479,1577,1248,1048,1773,1583,1414,803,1576,1654,1137,1438,1782,1195,1405,1741,1153,1322,820,1514,1198,1327,1661,1258,1640,1465,1393,1201,1795,1052,1862,1271,1158,1164,1732,1878,1760,1762,1968,1176,1981,1432,1735,1780,1891,1370,1900,1636,1920,841,851,1061,1629,1628,897,1367,1346,880,1851,1701,1578,989,1557,1796,1477,975,1970,1599,976,1609,931,865,1734,1191,1272,1844,1574,1965,1982,1475,1202,985,1378,1352,1772,984,1533,1222,1342,952,1889,1598,1070,1500,1410,1874,1821,1382,1564,1280,1197,934,864,1472,1815,1066,1713,1657,1138,960,1446,1434,1724,943,1461,1774,1146,877,1888,1792,1987,1850,1885,1130,1768,1454,1178,1493,1948,1308,1100,891,1199,1115,1226,926,1569,1975,1714,1384,1334,1840,1856,1755,1504,1861,1087,826,1188,1606,806,1872,908,1458,1205,1113,834,888,1005,1727,1716,1667,1399,1034,1167,1139,1212,1511,1251,1868,1360,1386,1751,1597,1184,1816,1587,1644,951,1976,1163,1757,1046,1020,1011,1216,1439,1579,1509,817,1552,819,1966,922,1109,1510,1492,2000,2141,2121,2467,2646,2538,2040,2712,2247,2115,1744,2732,2018,2347,2705,2755,2456,2136,2013,2205,2424,2323,2169,2243,2674,2287,2278,2071,1858,2471,1503,1498,2279,2740,2412,2356,2311,2277,2638,2643,2681,2082,2553,2744,2067,2037,2614,2590,1935,1490,2382,2172,1425,2710,2354,2794,2654,2542,2091,2339,2511,1217,1879,2111,1575,1754,1211,2651,2263,1365,2495,2684,1668,2658,2726,2677,2233,2189,2059,1292,2298,2776,1263,2760,2429,2240,2107,2473,2355,2790,2615,2197,1925,2080,2730,2069,2349,2384,1658,2273,2147,2427,2072,2284,2326,2579,2483,2504,2104,1777,1344,2612,2697,2454,2182,2209,2221,2345,2434,2296,2591,1778,2232,1375,1519,2389,2516,2435,2673,2562,2637,2428,2036,2381,2629,2175,2459,2487,2662,2763,2387,1731,2216,2098,2219,2198,2270,2650,2618,2163,2183,1952,1278,1255,2304,1361,1870,2690,2092,2265,2318,2225,2302,1917,2370,2691,2079,2549,2608,2315,2686,2616,2441,2137,1803,2364,2402,2517,1995,2353,2007,2783,2708,1364,1909,2012,2564,1847,2678,2438,2193,2609,1270,2294,2350,2124,2019,2547,2793,2601,2574,2383,1373,1471,2062,1964,2286,2661,2184,2249,2056,2508,2187,2442,2693,2330,2167,2571,2002,2050,1684,2367,2283,2305,2718,2170,1331,2094,2269,2224,2663,2716,2084,2769,2751,1586,2027,2123,2784,1779,2507,1402,2747,2782,2083,2624,2622,2498,1706,1330,1332,1363,2188,2695,2787,2142,2154,1641,2109,2164,2043,2417,1238,2368,2526,1590,2719,1585,2665,2112,2704,2252,2741,2569,2212,2177,2715,1685,2458,1413,2539,2226,1826,2733,2229,2422,2192,2419,2676,2135,1518,2706,2644,2308,2152,2065,2527,2541]

s = Solution()

start = timer()
for i in range(10000): s.findBySorting(A)
end = timer()
print("findBySorting avg =")
print(end - start)

start = timer()
for i in range(10000): s.findByDividingTree(A)
end = timer()
print("findByDividingTree avg =")
print(end - start)
