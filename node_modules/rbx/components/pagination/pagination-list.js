import * as tslib_1 from "tslib";
import classNames from "classnames";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
export const PaginationList = forwardRefAs((_a, ref) => {
    var { className } = _a, rest = tslib_1.__rest(_a, ["className"]);
    return (React.createElement(Generic, Object.assign({ className: classNames("pagination-list", className), ref: ref }, rest)));
}, { as: "ul" });
PaginationList.displayName = "Pagination.List";
//# sourceMappingURL=pagination-list.js.map