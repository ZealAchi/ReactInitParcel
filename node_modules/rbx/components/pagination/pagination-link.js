import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
export const PaginationLink = forwardRefAs((_a, ref) => {
    var { className, current } = _a, rest = tslib_1.__rest(_a, ["className", "current"]);
    return (React.createElement("li", null,
        React.createElement(Generic, Object.assign({ className: classNames("pagination-link", { "is-current": current }, className), ref: ref }, rest))));
}, { as: "a" });
PaginationLink.displayName = "Pagination.Link";
PaginationLink.propTypes = {
    current: PropTypes.bool,
};
//# sourceMappingURL=pagination-link.js.map