/*
specs for "table 21":
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
+--------+---------------------------+        |
|                                    |        |
|                   footer           |        |
|                                    |        |
+------------------------------------+--------+
*/

var t21 = {
    "divid" : "page",
    "rows"  : [
        [
            [ "td_left_margin",  [ "left_margin"    ]                   ],
            [ "td_body",         [ "header", "body" ]                   ],
            [ "td_right_margin", [ "right_margin"   ], [ "rowSpan", 2 ] ]
        ],
        [
            [ "td_footer", [ "footer" ], [ "colSpan", 2 ] ]
        ] 
    ]
};

var ltrffl = t21;
