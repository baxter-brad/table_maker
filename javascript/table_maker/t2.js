/*
specs for "table 2":
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
|        +---------------------------+--------+
|        |                                    |
|        |          footer                    |
|        |                                    |
+--------+------------------------------------+
*/

var oT2 = [ "page", [
        [
            [ "td_header", [ "header" ], [ "colSpan", 3 ] ]
        ],
        [
            [ "td_left_margin",  [ "left_margin"  ], [ "rowSpan", 2 ] ],
            [ "td_body",         [ "body"         ]                   ],
            [ "td_right_margin", [ "right_margin" ]                   ]
        ],
        [
            [ "td_footer", [ "footer" ], [ "colSpan", 2 ] ]
        ]
    ]
];

var hflbrmfr = oT2;
