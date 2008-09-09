/*
specs for "table 36":
+------------------------------------+--------+
|                                    |        |
|                   header           |        |
|                                    |        |
|                                    |        |
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

var oT36 = [ "page", [
        [
            [ "td_body",         [ "header", "left_margin", "body" ]                   ],
            [ "td_right_margin", [ "right_margin"                  ], [ "rowSpan", 2 ] ]
        ],
        [
            [ "td_footer", [ "footer" ] ]
        ]
    ]
];

var rffl = oT36;
