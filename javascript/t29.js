/*
specs for "table 29":
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
+------------------------------------+        |
|                                    |        |
|                   footer           |        |
|                                    |        |
+------------------------------------+--------+

(but left margin not necessarily float left)

*/

var oT29 = [ "page", [
        [
            [ "td_header", [ "header" ], [ "colSpan", 2 ] ]
        ],
        [
            [ "td_body",         [ "left_margin", "body" ]                   ],
            [ "td_right_margin", [ "right_margin"        ], [ "rowSpan", 2 ] ]
        ],
        [
            [ "td_footer", [ "footer" ] ]
        ] 
    ]
];

var hfrbfl = oT29;
