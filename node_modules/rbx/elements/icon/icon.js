import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
export const ICON_DEFAULTS = {
    alignments: ["left", "right"],
    sizes: ["small", "medium", "large"],
};
export const Icon = forwardRefAs((_a, ref) => {
    var { align, className, color, size } = _a, rest = tslib_1.__rest(_a, ["align", "className", "color", "size"]);
    return (React.createElement(Generic, Object.assign({ className: classNames("icon", {
            [`has-text-${color}`]: color,
            [`is-${align}`]: align,
            [`is-${size}`]: size,
        }, className), ref: ref }, rest)));
}, { as: "span" });
Icon.displayName = "Icon";
Icon.propTypes = {
    align: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
//# sourceMappingURL=icon.js.map