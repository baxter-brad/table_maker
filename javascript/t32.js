/*
specs for "table 32":
+--------+------------------------------------+
|        |                                    |
|        |          header                    |
|        |                                    |
|        +------------------------------------+
|        |                                    |
|        |                                    |
| left   |           body              right  |
| margin |                             margin |
|        |                                    |
|        |                                    |
|        |                                    |
|        |          footer                    |
|        |                                    |
+--------+------------------------------------+

(but right margin not necessarily float right)

*/

var oT32 = [ "page", [
        [
            [ "td_left_margin", [ "left_margin" ], [ "rowSpan", 2 ] ],
            [ "td_header",      [ "header"      ]                   ]
        ],
        [
            [ "td_body", [ "body", "right_margin", "footer" ] ]
        ]
    ]
];

var hrlf = oT32;
