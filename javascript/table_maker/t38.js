/*
specs for "table 38":
+--------+------------------------------------+
|        |                                    |
|        |          header                    |
|        |                                    |
|        |                                    |
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

var t38 = {
    "divid" : "page",
    "rows"  : [
        [
            [ "td_left_margin", [ "left_margin"                    ], [ "rowSpan", 2 ] ],
            [ "td_body",        [ "header", "body", "right_margin" ]                   ]
        ],
        [
            [ "td_footer", [ "footer" ] ]
        ]
    ]
};

var lffr = t38;
