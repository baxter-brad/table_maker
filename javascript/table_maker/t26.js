/*
specs for "table 26":
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
+--------+------------------------------------+
|                                             |
|                   footer                    |
|                                             |
+---------------------------------------------+

(but right margin not necessarily float right)

*/

var t26 = {
    "divid" : "page",
    "rows"  : [
        [
            [ "td_header", [ "header" ], [ "colSpan", 2 ] ]
        ],
        [
            [ "td_left_margin", [ "left_margin"          ] ],
            [ "td_body",        [ "body", "right_margin" ] ]
        ],
        [
            [ "td_footer", [ "footer" ], [ "colSpan", 2 ] ]
        ] 
    ]
};

var hflmff = t26;
