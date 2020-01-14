import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
export const TAB_GROUP_DEFAULTS = {
    alignments: ["centered", "right"],
    sizes: ["small", "medium", "large"],
    kinds: ["boxed", "toggle", "toggle-rounded"],
};
export const TabGroup = forwardRefAs((_a, ref) => {
    var { align, children, className, fullwidth, kind, size } = _a, rest = tslib_1.__rest(_a, ["align", "children", "className", "fullwidth", "kind", "size"]);
    return (React.createElement(Generic, Object.assign({ className: classNames("tabs", {
            [`is-${align}`]: align,
            [`is-${size}`]: size,
            "is-fullwidth": fullwidth,
            [`is-${kind}`]: kind,
            "is-toggle": kind === "toggle" || kind === "toggle-rounded",
            "is-toggle-rounded": kind === "toggle-rounded",
        }, className), children: React.createElement("ul", null, children), ref: ref }, rest)));
}, { as: "div" });
TabGroup.displayName = "Tab.Group";
TabGroup.propTypes = {
    align: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    fullwidth: PropTypes.bool,
    kind: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
//# sourceMappingURL=tab-group.js.map