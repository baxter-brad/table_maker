/*
specs for "table 44":
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
|                                    |        |
|                                    |        |
|                   footer           |        |
|                                    |        |
+------------------------------------+--------+

(but left margin not necessarily float left)

*/

var t44 = {
    "divid" : "page",
    "rows"  : [
        [
            [ "td_body",         [ "header", "left_margin", "body", "footer" ] ],
            [ "td_right_margin", [ "right_margin" ]                            ]
        ]
    ]
};

var rf = t44;
