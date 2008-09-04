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

var t2_specs = [ "page", [
        [ [ "header", "colSpan", 3 ] ],
        [
            [ "left_margin",  "rowSpan", 2 ],
            [ "body"                       ],
            [ "right_margin"               ]
        ],
        [ [ "footer", "colSpan", 2 ] ]
    ]
];
