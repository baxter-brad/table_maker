/*
specs for "table 46": ("pinwheel")
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
+--------+---------------------------+        |
|                                    |        |
|                   footer           |        |
|                                    |        |
+------------------------------------+--------+
*/

var t46 = {
    "divid" : "page",
    "rows"  : [
        [
            [ "td_left_margin",  [ "left_margin"  ], [ "rowSpan", 2 ] ],
            [ "td_header",       [ "header" ],       [ "colSpan", 2 ] ]
        ],
        [
            [ "td_body",         [ "body"         ]                   ],
            [ "td_right_margin", [ "right_margin" ], [ "rowSpan", 2 ] ]
        ],
        [
            [ "td_footer", [ "footer" ], [ "colSpan", 2 ] ]
        ]
    ]
};

var hrltrbfl = t46;
