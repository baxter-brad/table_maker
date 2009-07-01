/*
specs for "table 33":
+---------------------------------------------+
|                                             |
|                   header                    |
|                                             |
+------------------------------------+--------+
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

var t33 = {
    "divid" : "page",
    "rows"  : [
        [
            [ "td_header", [ "header" ], [ "colSpan", 2 ] ]
        ],
        [
            [ "td_body",         [ "left_margin", "body", "footer" ] ],
            [ "td_right_margin", [ "right_margin"                  ] ]
        ]
    ]
};

var hfrb = t33;
