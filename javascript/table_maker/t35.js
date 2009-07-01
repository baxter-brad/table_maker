/*
specs for "table 35":
+------------------------------------+--------+
|                                    |        |
|                   header           |        |
|                                    |        |
|                                    |        |
|                                    |        |
|                                    |        |
| left               body            | right  |
| margin                             | margin |
|                                    |        |
+------------------------------------+--------+
|                                             |
|                   footer                    |
|                                             |
+---------------------------------------------+

(but left margin not necessarily float left)

*/

var t35 = {
    "divid" : "page",
    "rows"  : [
        [
            [ "td_body",         [ "header", "left_margin", "body" ] ],
            [ "td_right_margin", [ "right_margin"                  ] ]
        ],
        [
            [ "td_footer", [ "footer" ], [ "colSpan", 2 ] ]
        ]
    ]
};

var rtff = t35;
