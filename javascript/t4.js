/*
specs for "table 4":
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
+--------+---------------------------+--------+
|                                             |
|                   footer                    |
|                                             |
+---------------------------------------------+
*/

var oT4 = [ "page", [
        [
            [ "td_header", [ "header" ], [ "colSpan", 3 ] ]
        ],
        [
            [ "td_left_margin",  [ "left_margin"  ] ],
            [ "td_body",         [ "body"         ] ],
            [ "td_right_margin", [ "right_margin" ] ]
        ],
        [
            [ "td_footer", [ "footer" ], [ "colSpan", 3 ] ]
        ]
    ]
];

var hflmrmff = oT4;
