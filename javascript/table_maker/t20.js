/*
specs for "table 20":
+--------+---------------------------+--------+
|        |                           |        |
|        |          header           |        |
|        |                           |        |
|        |                           |        |
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

var t20 = {
    "divid" : "page",
    "rows"  : [
        [
            [ "td_left_margin",  [ "left_margin"  ],  [ "rowSpan", 2 ] ],
            [ "td_body",         [ "header", "body" ]                  ],
            [ "td_right_margin", [ "right_margin" ]                    ]
        ],
        [
            [ "td_footer", [ "footer" ], [ "colSpan", 2 ] ]
        ] 
    ]
};

var lfrtfr = t20;
