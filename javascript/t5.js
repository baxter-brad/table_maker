/*
specs for "table 5":
+--------+------------------------------------+
|        |                                    |
|        |          header                    |
|        |                                    |
|        |---------------------------+--------+
|        |                           |        |
|        |                           |        |
| left   |           body            | right  |
| margin |                           | margin |
|        |                           |        |
+--------+---------------------------+--------+
|                                             |
|                   footer                    |
|                                             |
+---------------------------------------------+
*/

var t5 = {
    "divid" : "page",
    "rows"  : [
        [
            [ "td_left_margin", [ "left_margin" ], [ "rowSpan", 2 ] ],
            [ "td_header",      [ "header" ],      [ "colSpan", 2 ] ]
        ],
        [
            [ "td_body",         [ "body"         ] ],
            [ "td_right_margin", [ "right_margin" ] ]
        ],
        [
            [ "td_footer", [ "footer" ], [ "colSpan", 3 ] ]
        ]
    ]
};

var hrltrmff = t5;
