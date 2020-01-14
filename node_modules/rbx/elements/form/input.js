import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
export const INPUT_DEFAULTS = {
    sizes: ["small", "medium", "large"],
    states: ["focused", "hovered"],
    types: [
        "text",
        "email",
        "tel",
        "password",
        "number",
        "search",
        "color",
        "date",
        "time",
    ],
};
export const Input = forwardRefAs((_a, ref) => {
    var { className, color, readOnly, rounded, size, state, static: isStatic } = _a, rest = tslib_1.__rest(_a, ["className", "color", "readOnly", "rounded", "size", "state", "static"]);
    const isReadOnly = readOnly === true || isStatic === true;
    return (React.createElement(Generic, Object.assign({ className: classNames("input", {
            [`is-${color}`]: color,
            "is-rounded": rounded,
            [`is-${size}`]: size,
            "is-static": isStatic,
            [`is-${state}`]: state,
        }, className), readOnly: isReadOnly, ref: ref }, rest)));
}, { as: "input" });
Input.displayName = "Input";
Input.propTypes = {
    color: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    readOnly: PropTypes.bool,
    rounded: PropTypes.bool,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    state: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    static: PropTypes.bool,
    type: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
//# sourceMappingURL=input.js.map