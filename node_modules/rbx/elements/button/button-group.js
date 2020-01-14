import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
export const BUTTON_GROUP_DEFAULTS = {
    alignments: ["centered", "right"],
    sizes: ["small", "medium", "large"],
};
export const ButtonGroup = forwardRefAs((_a, ref) => {
    var { align, className, hasAddons, size } = _a, rest = tslib_1.__rest(_a, ["align", "className", "hasAddons", "size"]);
    return (React.createElement(Generic, Object.assign({ className: classNames("buttons", {
            [`are-${size}`]: size,
            "has-addons": hasAddons,
            [`is-${[align]}`]: align,
        }, className), ref: ref }, rest)));
}, { as: "div" });
ButtonGroup.displayName = "Button.Group";
ButtonGroup.propTypes = {
    align: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    hasAddons: PropTypes.bool,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
//# sourceMappingURL=button-group.js.map