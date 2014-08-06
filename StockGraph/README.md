Stock Graph
==================

Your mission is to draw stock graph. You will be given a string consisting of "R"(Rise), "F"(Fall) and "C"(Constant) character.
"R" means that stock rises. "F" means that stock falls. "C" means that stock holds constant.

### Graph Rules

As encounting "R", print "/"(slash) to draw a rising line for stock rising; "\"(backslash) for stock falling; "_"(underscore) for constant stock.

Like the below sample graphs, your stock graph must have X and Y axis. The length of the X axis has to be one more character than the stock graph. There shall be one whitespace between the Y axis and the stock graph. No redundant chracater is present in the end of each row. No redundant row either.

Sample 1:

"RCRFCRFFCCRRC"
```
|             _
|  _/\_/\    /
| /      \__/
+---------------
```

Sample 2:

"CFF"
```
| _
|  \
|   \
+-----
```

Sample 3:

"FFFCCRRCCCRR"
```
|            /
| \      ___/
|  \    /
|   \__/
+--------------
```


