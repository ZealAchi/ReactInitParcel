import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
import { BreadcrumbItem } from "./breadcrumb-item";
export const BREADCRUMB_DEFAULTS = {
    alignments: ["centered", "right"],
    separators: ["arrow", "bullet", "dot", "succeeds"],
    sizes: ["small", "medium", "large"],
};
export const Breadcrumb = Object.assign(forwardRefAs((_a, ref) => {
    var { align, children, className, separator, size } = _a, rest = tslib_1.__rest(_a, ["align", "children", "className", "separator", "size"]);
    return (React.createElement(Generic, Object.assign({ className: classNames("breadcrumb", {
            [`has-${separator}-separator`]: separator,
            [`is-${align}`]: align,
            [`is-${size}`]: size,
        }, className), ref: ref }, rest),
        React.createElement("ul", null, children)));
}, { as: "nav" }), { Item: BreadcrumbItem });
Breadcrumb.displayName = "Breadcrumb";
Breadcrumb.propTypes = {
    align: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    separator: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
//# sourceMappingURL=breadcrumb.js.map