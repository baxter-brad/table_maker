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

var t3_specs = [ "page", [
        [ [ "header", "colSpan", 3 ] ],
        [
            [ "left_margin"                ],
            [ "body"                       ],
            [ "right_margin", "rowSpan", 2 ]
        ],
        [ [ "footer", "colSpan", 2 ] ]
    ]
];
