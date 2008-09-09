/*
specs for "table 9":
+--------+------------------------------------+
|        |                                    |
|        |          header                    |
|        |                                    |
|        +---------------------------+--------+
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

var oT9 = [ "page", [
        [
            [ "td_left_margin",  [ "left_margin"  ], [ "rowSpan", 3 ] ],
            [ "td_header",       [ "header"       ], [ "colSpan", 2 ] ] 
        ],
        [
            [ "td_body",         [ "body"         ]                   ],
            [ "td_right_margin", [ "right_margin" ], [ "rowSpan", 2 ] ]
        ],
        [
            [ "td_footer", [ "footer" ] ]
        ]
    ]
];

var hrlfrbfc = oT9;
