/*
specs for "table 16":
+--------+------------------------------------+
|        |                                    |
|        |          header                    |
|        |                                    |
|        +---------------------------+--------+
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

var t16 = {
    "divid" : "page",
    "rows"  : [
        [
            [ "td_left_margin", [ "left_margin"  ], [ "rowSpan", 2 ] ],
            [ "td_header",      [ "header"       ], [ "colSpan", 2 ] ]
        ],
        [
            [ "td_body",         [ "body", "footer" ] ],
            [ "td_right_margin", [ "right_margin"   ] ]
        ] 
    ]
};

var hrlfrb = t16;
