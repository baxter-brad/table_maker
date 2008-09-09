/*
specs for "table 42":
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
+---------------------------------------------+
|                                             |
|                   footer                    |
|                                             |
+---------------------------------------------+

(but left/right margins don't necessarily float)

*/

var oT42 = [ "page", [
        [
            [ "td_body", [ "header", "left_margin", "body", "right_margin" ] ]
        ],
        [
            [ "td_footer", [ "footer" ] ]
        ]
    ]
];

var ff = oT42;
