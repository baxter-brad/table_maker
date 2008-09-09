/*
specs for "table 37":
+--------+------------------------------------+
|        |                                    |
|        |          header                    |
|        |                                    |
|        |                                    |
|        |                                    |
|        |                                    |
| left   |           body              right  |
| margin |                             margin |
|        |                                    |
+--------+------------------------------------+
|                                             |
|                   footer                    |
|                                             |
+---------------------------------------------+

(but right margin not necessarily float right)

*/

var oT37 = [ "page", [
        [
            [ "td_left_margin", [ "left_margin"                    ] ],
            [ "td_body",        [ "header", "body", "right_margin" ] ]
        ],
        [
            [ "td_footer", [ "footer" ], [ "colSpan", 2 ] ]
        ]
    ]
];

var ltff = oT37;
