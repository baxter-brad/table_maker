/*
specs for "table 39":
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
+---------------------------------------------+
|                                             |
|                   footer                    |
|                                             |
+---------------------------------------------+

(but left/right margins don't necessarily float)

*/

var oT39 = [ "page", [
        [
            [ "td_header", [ "header" ] ]
        ],
        [
            [ "td_body", [ "left_margin", "body", "right_margin" ] ]
        ],
        [
            [ "td_footer", [ "footer" ] ]
        ]
    ]
];

var hfff = oT39;
