import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
export const CONTROL_DEFAULTS = {
    sizes: ["small", "medium", "large"],
};
export const Control = forwardRefAs((_a, ref) => {
    var { className, expanded, iconLeft, iconRight, loading, size } = _a, rest = tslib_1.__rest(_a, ["className", "expanded", "iconLeft", "iconRight", "loading", "size"]);
    return (React.createElement(Generic, Object.assign({ className: classNames("control", {
            "has-icons-left": iconLeft,
            "has-icons-right": iconRight,
            "is-expanded": expanded,
            "is-loading": loading,
            [`is-${size}`]: size,
        }, className), ref: ref }, rest)));
}, { as: "div" });
Control.displayName = "Control";
Control.propTypes = {
    expanded: PropTypes.bool,
    iconLeft: PropTypes.bool,
    iconRight: PropTypes.bool,
    loading: PropTypes.bool,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
//# sourceMappingURL=control.js.map