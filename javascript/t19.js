/*
specs for "table 19":
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
+--------+---------------------------+--------+
|                                             |
|                   footer                    |
|                                             |
+---------------------------------------------+
*/

var oT19 = [ "page", [
        [
            [ "td_left_margin",  [ "left_margin"    ] ],
            [ "td_body",         [ "header", "body" ] ],
            [ "td_right_margin", [ "right_margin"   ] ]
        ],
        [
            [ "td_footer", [ "footer" ], [ "colSpan", 3 ] ]
        ] 
    ]
];

var ltrtff = oT19;
