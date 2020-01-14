import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
import { ButtonGroup } from "./button-group";
export const BUTTON_DEFAULTS = {
    sizes: ["small", "normal", "medium", "large"],
    states: ["hovered", "focused", "active", "loading"],
};
const propTypes = {
    color: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    fullwidth: PropTypes.bool,
    inverted: PropTypes.bool,
    outlined: PropTypes.bool,
    rounded: PropTypes.bool,
    selected: PropTypes.bool,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    state: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    static: PropTypes.bool,
    text: PropTypes.bool,
};
export const Button = Object.assign(forwardRefAs((_a, ref) => {
    var { className, color, fullwidth, inverted, outlined, rounded, selected, size, state, static: isStatic, text } = _a, rest = tslib_1.__rest(_a, ["className", "color", "fullwidth", "inverted", "outlined", "rounded", "selected", "size", "state", "static", "text"]);
    return (React.createElement(Generic, Object.assign({ className: classNames("button", {
            [`is-${color}`]: color,
            "is-fullwidth": fullwidth,
            "is-inverted": inverted,
            "is-outlined": outlined,
            "is-rounded": rounded,
            "is-selected": selected,
            [`is-${size}`]: size,
            [`is-${state}`]: state,
            "is-static": isStatic,
            "is-text": text,
        }, className), ref: ref }, rest)));
}, { as: "button" }), { Group: ButtonGroup });
Button.displayName = "Button";
Button.propTypes = propTypes;
//# sourceMappingURL=button.js.map