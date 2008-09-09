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

var t40_specs = [ "page", [
        [
            [ "td_left_margin",  [ "left_margin"  ]             ],
            [ "td_body",         [ "header", "body", "footer" ] ],
            [ "td_right_margin", [ "right_margin" ]             ]
        ]
    ]
];

var lfrf = t40_specs;
