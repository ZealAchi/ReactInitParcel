import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
export const Divider = forwardRefAs((_a, ref) => {
    var { children, className, color, vertical } = _a, rest = tslib_1.__rest(_a, ["children", "className", "color", "vertical"]);
    return (React.createElement(Generic, Object.assign({ className: classNames("is-divider", {
            [`is-${color}`]: color,
            ["is-divider-vertical"]: vertical,
        }, className), "data-content": children, ref: ref }, rest)));
}, {
    as: "div",
    children: "",
});
Divider.displayName = "Divider";
Divider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    vertical: PropTypes.bool,
};
//# sourceMappingURL=divider.js.map