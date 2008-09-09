/*
specs for "table 6":
+------------------------------------+--------+
|                                    |        |
|                   header           |        |
|                                    |        |
+--------+---------------------------+        +
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

var oT6 = [ "page", [
        [
            [ "td_header",       [ "header" ],       [ "colSpan", 2 ] ],
            [ "td_right_margin", [ "right_margin" ], [ "rowSpan", 2 ] ]
        ],
        [
            [ "td_left_margin",  [ "left_margin"  ] ],
            [ "td_body",         [ "body"         ] ]
        ],
        [
            [ "td_footer", [ "footer" ], [ "colSpan", 3 ] ]
        ]
    ]
];

var hllmrtff = oT6;
