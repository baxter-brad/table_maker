/*
specs for "table 10":
+--------+---------------------------+--------+
|        |                           |        |
|        |          header           |        |
|        |                           |        |
|        +---------------------------+        |
|        |                           |        |
|        |                           |        |
| left   |           body            | right  |
| margin |                           | margin |
|        |                           |        |
|        |---------------------------+--------+
|        |                                    |
|        |          footer                    |
|        |                                    |
+---------------------------------------------+
*/

var t10_specs = [ "page", [
        [
            [ "td_left_margin",  [ "left_margin"  ], [ "rowSpan", 3 ] ],
            [ "td_header",       [ "header"       ]                   ],
            [ "td_right_margin", [ "right_margin" ], [ "rowSpan", 2 ] ]
        ],
        [
            [ "td_body", [ "body" ] ]
        ],
        [
            [ "td_footer", [ "footer" ], [ "colSpan", 2 ] ]
        ]
    ]
];

var hclfrtfr = t10_specs;
