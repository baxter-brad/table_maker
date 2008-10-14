/*
specs for "table 31":  ("gun")
+---------------------------------------------+
|                                             |
|                   header                    |
|                                             |
+--------+------------------------------------+
|        |                                    |
|        |                                    |
| left   |           body              right  |
| margin |                             margin |
|        |                                    |
|        |                                    |
|        |                                    |
|        |          footer                    |
|        |                                    |
+--------+------------------------------------+

(but right margin not necessarily float right)

*/

var oT31 = [ "page", [
        [
            [ "td_header", [ "header" ], [ "colSpan", 2 ] ]
        ],
        [
            [ "td_left_margin", [ "left_margin"                    ] ],
            [ "td_body",        [ "body", "right_margin", "footer" ] ]
        ]
    ]
];

var hflb = oT31;