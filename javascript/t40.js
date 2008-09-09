/*
specs for "table 40":
+--------+---------------------------+--------+
|        |                           |        |
|        |          header           |        |
|        |                           |        |
|        |                           |        |
|        |                           |        |
|        |                           |        |
| left   |           body            | right  |
| margin |                           | margin |
|        |                           |        |
|        |                           |        |
|        |                           |        |
|        |          footer           |        |
|        |                           |        |
+--------+---------------------------+--------+
*/

var oT40 = [ "page", [
        [
            [ "td_left_margin",  [ "left_margin"  ]             ],
            [ "td_body",         [ "header", "body", "footer" ] ],
            [ "td_right_margin", [ "right_margin" ]             ]
        ]
    ]
];

var lfrf = oT40;
