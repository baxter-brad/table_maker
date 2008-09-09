/*
specs for "table 12":
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
+--------+---------------------------+        |
|                                    |        |
|                   footer           |        |
|                                    |        |
+------------------------------------+--------+
*/

var t12_specs = [ "page", [
        [
            [ "td_header",       [ "header"       ], [ "colSpan", 2 ] ],
            [ "td_right_margin", [ "right_margin" ], [ "rowSpan", 3 ] ]
        ],
        [
            [ "td_left_margin", [ "left_margin"  ] ],
            [ "td_body",        [ "body" ]         ]
        ],
        [
            [ "td_footer", [ "footer" ], [ "colSpan", 2 ] ]
        ]
    ]
];

var hllmrffl = t12_specs;
