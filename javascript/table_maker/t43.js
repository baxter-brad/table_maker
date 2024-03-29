/*
specs for "table 43":
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
|        |                                    |
|        |                                    |
|        |          footer                    |
|        |                                    |
+--------+------------------------------------+

(but right margin not necessarily flow right)

*/

var t43 = {
    "divid" : "page",
    "rows"  : [
        [
            [ "td_left_margin", [ "left_margin"  ]                             ],
            [ "td_body",        [ "header", "body", "right_margin", "footer" ] ]
        ]
    ]
};

var lf = t43;
