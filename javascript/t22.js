/*
specs for "table 22":
+--------+---------------------------+--------+
|        |                           |        |
|        |          header           |        |
|        |                           |        |
|        |                           |        |
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

var t22_specs = [ "page", [
        [
            [ "td_left_margin",  [ "left_margin"    ], [ "rowSpan", 2 ] ],
            [ "td_body",         [ "header", "body" ]                   ],
            [ "td_right_margin", [ "right_margin"   ], [ "rowSpan", 2 ] ]
        ],
        [
            [ "td_footer", [ "footer" ] ]
        ] 
    ]
];

var lfrffc = t22_specs;
