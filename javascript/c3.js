/*
specs for "three columns":
+--------------------------------------------+
|                                            |
|                   header                   |
|                                            |
+--------------+--------------+--------------+
|              |              |              |
|              |              |              |
|              |              |              |
|              |              |              |
|              |              |              |
|              |              |              |
|   column 1   |   column 2   |   column 3   |
|              |              |              |
|              |              |              |
|              |              |              |
|              |              |              |
|              |              |              |
|              |              |              |
+--------------+--------------+--------------+
*/

var c3 = {
    "divid" : "page",
    "rows"  : [
        [
            [ "td_header", [ "header" ], [ "colSpan", 3 ] ]
        ],
        [
            [ "td_column1", [ "column1" ] ],
            [ "td_column2", [ "column2" ] ],
            [ "td_column3", [ "column3" ] ]
        ]
    ]
};

var hfcbcbcb = c3;
