/*
specs for "table 30":
+---------------------------------------------+
|                                             |
|                   header                    |
|                                             |
+------------------------------------+--------+
|                                    |        |
|                                    |        |
| left               body            | right  |
| margin                             | margin |
|                                    |        |
+------------------------------------+--------+
|                                             |
|                   footer                    |
|                                             |
+---------------------------------------------+

(but left margin not necessarily float left)

*/

var oT30 = [ "page", [
        [
            [ "td_header", [ "header" ], [ "colSpan", 2 ] ]
        ],
        [
            [ "td_body",         [ "left_margin", "body" ] ],
            [ "td_right_margin", [ "right_margin"        ] ]
        ],
        [
            [ "td_footer", [ "footer" ], [ "colSpan", 2 ] ]
        ] 
    ]
];

var hfrmff = oT30;
