/*
specs for "table 17":
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
|        |                           |        |
|        |                           |        |
|        |          footer           |        |
|        |                           |        |
+--------+---------------------------+--------+
*/

var t17_specs = [ "page", [
        [
            [ "td_header",       [ "header"       ], [ "colSpan", 2 ] ],
            [ "td_right_margin", [ "right_margin" ], [ "rowSpan", 2 ] ]
        ],
        [
            [ "td_left_margin", [ "left_margin"    ] ],
            [ "td_body",        [ "body", "footer" ] ]
        ] 
    ]
];

var hllbrf = t17_specs;
