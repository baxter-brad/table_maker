/*
specs for "table 15":
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
|        |                           |        |
|        |                           |        |
|        |          footer           |        |
|        |                           |        |
+--------+---------------------------+--------+
*/

var oT15 = [ "page", [
        [
            [ "td_left_margin",  [ "left_margin"  ], [ "rowSpan", 2 ] ],
            [ "td_header",       [ "header"       ]                   ],
            [ "td_right_margin", [ "right_margin" ], [ "rowSpan", 2 ] ]
        ],
        [
            [ "td_body", [ "body", "footer" ] ]
        ] 
    ]
];

var hclfrf = oT15;
