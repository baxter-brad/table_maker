/*
specs for "table 13":
+------------------------------------+--------+
|                                    |        |
|                   header           |        |
|                                    |        |
+--------+---------------------------+        |
|        |                           |        |
|        |                           |        |
| left   |           body            | right  |
| margin |                           | margin |
|        |                           |        |
|        +---------------------------+        |
|        |                           |        |
|        |          footer           |        |
|        |                           |        |
+--------+---------------------------+--------+
*/

var oT13 = [ "page", [
        [
            [ "td_header",       [ "header"       ], [ "colSpan", 2 ] ],
            [ "td_right_margin", [ "right_margin" ], [ "rowSpan", 3 ] ]
        ],
        [
            [ "td_left_margin", [ "left_margin"  ], [ "rowSpan", 2 ] ],
            [ "td_body",        [ "body" ]                           ]
        ],
        [
            [ "td_footer", [ "footer" ] ]
        ]
    ]
];

var hllbrffc = oT13;
