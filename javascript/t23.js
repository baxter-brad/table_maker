/*
specs for "table 23":
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
|        +------------------------------------+
|        |                                    |
|        |          footer                    |
|        |                                    |
+--------+------------------------------------+

(but right margin not necessarily float right)

*/

var t23 = {
    "divid" : "page",
    "rows"  : [
        [
            [ "td_left_margin", [ "left_margin" ], [ "rowSpan", 3 ] ],
            [ "td_header",      [ "header"      ]                   ]
        ],
        [
            [ "td_body", [ "body", "right_margin" ] ]
        ],
        [
            [ "td_footer", [ "footer" ] ]
        ] 
    ]
};

var hrlffr = t23;
