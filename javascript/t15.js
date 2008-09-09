/*
specs for "table 15":
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
|        |                           |        |
|        |                           |        |
|        |          footer           |        |
|        |                           |        |
+--------+---------------------------+--------+
*/

var oT15 = [ "page", [
        [
            [ "td_header", [ "header" ], [ "colSpan", 3 ] ],
        ],
        [
            [ "td_left_margin",  [ "left_margin"  ]   ],
            [ "td_body",         [ "body", "footer" ] ],
            [ "td_right_margin", [ "right_margin" ]   ]
        ] 
    ]
];

var hflbrb = oT15;
