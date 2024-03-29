/*
specs for "table 41":
+---------------------------------------------+
|                                             |
|                   header                    |
|                                             |
+---------------------------------------------+
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

var t41 = {
    "divid" : "page",
    "rows"  : [
        [
            [ "td_header", [ "header" ] ]
        ],
        [
            [ "td_body", [ "left_margin", "body", "right_margin", "footer" ] ]
        ]
    ]
};

var hf = t41;
