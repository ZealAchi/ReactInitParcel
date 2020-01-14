import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
import { PaginationEllipsis } from "./pagination-ellipsis";
import { PaginationLink } from "./pagination-link";
import { PaginationList } from "./pagination-list";
import { PaginationStep } from "./pagination-step";
export const PAGINATION_DEFAULTS = {
    alignments: ["centered", "right"],
    sizes: ["small", "medium", "large"],
};
export const Pagination = Object.assign(forwardRefAs((_a, ref) => {
    var { align, className, rounded, size } = _a, rest = tslib_1.__rest(_a, ["align", "className", "rounded", "size"]);
    return (React.createElement(Generic, Object.assign({ className: classNames("pagination", {
            [`is-${align}`]: align,
            "is-rounded": rounded,
            [`is-${size}`]: size,
        }, className), ref: ref }, rest)));
}, { as: "nav" }), {
    Ellipsis: PaginationEllipsis,
    Link: PaginationLink,
    List: PaginationList,
    Step: PaginationStep,
});
Pagination.displayName = "Pagination";
Pagination.propTypes = {
    align: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    rounded: PropTypes.bool,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
//# sourceMappingURL=pagination.js.map