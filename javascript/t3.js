/*
specs for "table 3":
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
+--------+---------------------------|        |
|                                    |        |
|                   footer           |        |
|                                    |        |
+------------------------------------+--------+
*/

var oT3 = [ "page", [
        [
            [ "td_header", [ "header" ], [ "colSpan", 3 ] ]
        ],
        [
            [ "td_left_margin",  [ "left_margin"  ]                   ],
            [ "td_body",         [ "body"         ]                   ],
            [ "td_right_margin", [ "right_margin" ], [ "rowSpan", 2 ] ]
        ],
        [
            [ "td_footer", [ "footer" ], [ "colSpan", 2 ] ]
        ]
    ]
];

var hflmrbfl = oT3;
