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

var t1_specs = [ "page", [
        [ [ "header", "colSpan", 3 ] ],
        [
            [ "left_margin",  "rowSpan", 2 ],
            [ "body"                       ],
            [ "right_margin", "rowSpan", 2 ]
        ],
        [ [ "footer"               ] ]
    ]
];
