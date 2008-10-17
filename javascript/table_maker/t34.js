/*
specs for "table 34":
+------------------------------------+--------+
|                                    |        |
|                   header           |        |
|                                    |        |
+------------------------------------+        |
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

var t34 = {
    "divid" : "page",
    "rows"  : [
        [
            [ "td_header",       [ "header" ]                         ],
            [ "td_right_margin", [ "right_margin" ], [ "rowSpan", 2 ] ]
        ],
        [
            [ "td_body", [ "left_margin", "body", "footer" ] ]
        ]
    ]
};

var hlrf = t34;
