/*
specs for "table 28":
+------------------------------------+--------+
|                                    |        |
|                   header           |        |
|                                    |        |
+------------------------------------+        |
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

var oT28 = [ "page", [
        [
            [ "td_header",       [ "header"       ]                   ],
            [ "td_right_margin", [ "right_margin" ], [ "rowSpan", 2 ] ]
        ],
        [
            [ "td_body", [ "left_margin", "body" ] ]
        ],
        [
            [ "td_footer", [ "footer" ], [ "colSpan", 2 ] ]
        ] 
    ]
];

var hlrtff = oT28;
