import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
export const PAGE_LOADER_DEFAULTS = {
    directions: ["right-to-left", "left-to-right"],
};
export const PageLoader = forwardRefAs((_a, ref) => {
    var { active, className, color, direction } = _a, rest = tslib_1.__rest(_a, ["active", "className", "color", "direction"]);
    return (React.createElement(Generic, Object.assign({ className: classNames("pageloader", {
            "is-active": active,
            [`is-${color}`]: color,
            [`is-${direction}`]: direction,
        }, className), ref: ref }, rest)));
}, { as: "div" });
PageLoader.displayName = "PageLoader";
PageLoader.propTypes = {
    active: PropTypes.bool,
    color: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    direction: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
//# sourceMappingURL=page-loader.js.map