/*
specs for "table 11":
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
|        |---------------------------+        |
|        |                           |        |
|        |          footer           |        |
|        |                           |        |
+------------------------------------+--------+
*/

var oT11 = [ "page", [
        [
            [ "td_left_margin",  [ "left_margin"  ], [ "rowSpan", 3 ] ],
            [ "td_header",       [ "header"       ]                   ],
            [ "td_right_margin", [ "right_margin" ], [ "rowSpan", 3 ] ]
        ],
        [
            [ "td_body", [ "body" ] ]
        ],
        [
            [ "td_footer", [ "footer" ] ]
        ]
    ]
];

var hclfrffc = oT11;
