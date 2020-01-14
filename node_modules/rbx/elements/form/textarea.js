import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
export const TEXTAREA_DEFAULTS = {
    sizes: ["small", "medium", "large"],
    states: ["focused", "hovered"],
};
export const Textarea = forwardRefAs((_a, ref) => {
    var { className, color, fixedSize, size, state } = _a, rest = tslib_1.__rest(_a, ["className", "color", "fixedSize", "size", "state"]);
    return (React.createElement(Generic, Object.assign({ className: classNames("textarea", {
            "has-fixed-size": fixedSize,
            [`is-${color}`]: color,
            [`is-${size}`]: size,
            [`is-${state}`]: state,
        }, className), ref: ref }, rest)));
}, {
    as: "textarea",
    rows: 4,
});
Textarea.displayName = "Textarea";
Textarea.propTypes = {
    color: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    fixedSize: PropTypes.bool,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    state: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
//# sourceMappingURL=textarea.js.map