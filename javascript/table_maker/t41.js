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

var oT41 = [ "page", [
        [
            [ "td_header", [ "header" ] ]
        ],
        [
            [ "td_body", [ "left_margin", "body", "right_margin", "footer" ] ]
        ]
    ]
];

var hf = oT41;
