/*
specs for "table 1":
+---------------------------------------------+
|                                             |
|                   header                    |
|                                             |
+--------+---------------------------+--------+
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

var oT1 = [ "page", [
        [
            [ "td_header", [ "header" ], [ "colSpan", 3 ] ]
        ],
        [
            [ "td_left_margin",  [ "left_margin"  ], [ "rowSpan", 2 ] ],
            [ "td_body",         [ "body"         ]                   ],
            [ "td_right_margin", [ "right_margin" ], [ "rowSpan", 2 ] ]
        ],
        [
            [ "td_footer", [ "footer" ] ]
        ]
    ]
];

var hflbrbfc = oT1;
