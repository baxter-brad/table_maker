/*
specs for "table 24":
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
+--------+------------------------------------+
|                                             |
|                   footer                    |
|                                             |
+---------------------------------------------+

(but right margin not necessarily float right)

*/

var t24_specs = [ "page", [
        [
            [ "td_left_margin", [ "left_margin" ], [ "rowSpan", 2 ] ],
            [ "td_header",      [ "header"      ]                   ]
        ],
        [
            [ "td_body", [ "body", "right_margin" ] ]
        ],
        [
            [ "td_footer", [ "footer" ], [ "colSpan", 2 ] ]
        ] 
    ]
];

var hrltff = t24_specs;
