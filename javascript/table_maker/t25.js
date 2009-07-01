/*
specs for "table 25":
+---------------------------------------------+
|                                             |
|                   header                    |
|                                             |
+--------+------------------------------------+
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

var t25 = {
    "divid" : "page",
    "rows"  : [
        [
            [ "td_header", [ "header" ], [ "colSpan", 2 ] ]
        ],
        [
            [ "td_left_margin", [ "left_margin"          ], [ "rowSpan", 2 ] ],
            [ "td_body",        [ "body", "right_margin" ]                   ]
        ],
        [
            [ "td_footer", [ "footer" ] ]
        ] 
    ]
};

var hflbfr = t25;
