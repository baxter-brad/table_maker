/*
specs for "table 8":
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
|        |---------------------------+--------+
|        |                                    |
|        |          footer                    |
|        |                                    |
+---------------------------------------------+
*/

var oT8 = [ "page", [
        [
            [ "td_left_margin",  [ "left_margin"  ], [ "rowSpan", 3 ] ],
            [ "td_header",       [ "header"       ], [ "colSpan", 2 ] ] 
        ],
        [
            [ "td_body",         [ "body"         ] ],
            [ "td_right_margin", [ "right_margin" ] ]
        ],
        [
            [ "td_footer", [ "footer" ], [ "colSpan", 2 ] ]
        ]
    ]
];

var hrlfrmfr = oT8;
