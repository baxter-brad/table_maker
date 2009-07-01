/*
specs for "table 2":
+---------------------------------------------+
|                                             |
|                   header                    |
|                                             |
+--------+---------------------------+--------+
|        |                           |        |
|        |                           |        |
| left   |           body            | right  |
| margin |                           | margin |
|        |                           |        |
|        +---------------------------+--------+
|        |                                    |
|        |          footer                    |
|        |                                    |
+--------+------------------------------------+
*/

var t2 = {
    "divid" : "page",
    "rows"  : [
        [
            [ "td_header", [ "header" ], [ "colSpan", 3 ] ]
        ],
        [
            [ "td_left_margin",  [ "left_margin"  ], [ "rowSpan", 2 ] ],
            [ "td_body",         [ "body"         ]                   ],
            [ "td_right_margin", [ "right_margin" ]                   ]
        ],
        [
            [ "td_footer", [ "footer" ], [ "colSpan", 2 ] ]
        ]
    ]
};

var hflbrmfr = t2;
