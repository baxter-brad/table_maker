/*
specs for "table 27":
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
+------------------------------------+        |
|                                    |        |
|                   footer           |        |
|                                    |        |
+------------------------------------+--------+

(but left margin not necessarily float left)

*/

var t27 = {
    "divid" : "page",
    "rows"  : [
        [
            [ "td_header",       [ "header" ]                         ],
            [ "td_right_margin", [ "right_margin" ], [ "rowSpan", 3 ] ]
        ],
        [
            [ "td_body", [ "left_margin", "body" ] ]
        ],
        [
            [ "td_footer", [ "footer" ] ]
        ] 
    ]
};

var hlrffl = t27;
