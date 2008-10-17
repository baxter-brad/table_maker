/*
specs for "table 0":
+---------------------------------------------+
|                                             |
|                   header                    |
|                                             |
|                                             |
|                                             |
|                                             |
| left               body              right  |
| margin                               margin |
|                                             |
|                                             |
|                                             |
|                   footer                    |
|                                             |
+---------------------------------------------+

(but left/right margins don't necessarily float)

*/

var t0 = {
    "divid" : "page",
    "rows"  : [
        [
            [ "td_body", [ "header", "left_margin", "body", "right_margin", "footer" ] ]
        ]
    ]
};

var bf = t0;
