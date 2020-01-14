import * as tslib_1 from "tslib";
import classNames from "classnames";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
export const PaginationEllipsis = forwardRefAs((_a, ref) => {
    var { className } = _a, rest = tslib_1.__rest(_a, ["className"]);
    return (React.createElement("li", null,
        React.createElement(Generic, Object.assign({ className: classNames("pagination-ellipsis", className), ref: ref }, rest))));
}, {
    as: "span",
    children: "…",
});
PaginationEllipsis.displayName = "Pagination.Ellipsis";
//# sourceMappingURL=pagination-ellipsis.js.map