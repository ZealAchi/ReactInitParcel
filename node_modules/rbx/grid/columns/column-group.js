import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
import { DEFAULTS } from "../../base/helpers/variables";
export const COLUMN_GROUP_DEFAULTS = {
    gapSizes: [0, 1, 2, 3, 4, 5, 6, 7, 8],
};
export const ColumnGroup = forwardRefAs((_a, ref) => {
    var { className, breakpoint, centered, desktop, fullhd, gapless, gapSize, mobile, multiline, tablet, widescreen, touch, vcentered } = _a, rest = tslib_1.__rest(_a, ["className", "breakpoint", "centered", "desktop", "fullhd", "gapless", "gapSize", "mobile", "multiline", "tablet", "widescreen", "touch", "vcentered"]);
    const breakpoints = {
        desktop,
        fullhd,
        mobile,
        tablet,
        touch,
        widescreen,
    };
    const gapSizeClassNames = classNames({ [`is-${gapSize}`]: typeof gapSize === "number" }, Object.keys(breakpoints)
        .map(key => {
        const value = breakpoints[key];
        return value === undefined
            ? {}
            : { [`is-${value.gapSize}-${key}`]: value.gapSize !== undefined };
    })
        .reduce((acc, cv) => (Object.assign({}, acc, cv)), {}));
    return (React.createElement(Generic, Object.assign({ className: classNames("columns", {
            [`is-${breakpoint}`]: breakpoint,
            "is-centered": centered,
            "is-gapless": gapless,
            "is-multiline": multiline,
            "is-variable ": gapSizeClassNames !== "",
            "is-vcentered": vcentered,
        }, gapSizeClassNames, className), ref: ref }, rest)));
}, { as: "div" });
ColumnGroup.displayName = "Column.Group";
const ColumnGroupBreakpointPropTypes = {
    gapSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
ColumnGroup.propTypes = Object.assign({}, DEFAULTS.breakpoints
    .map(breakpoint => ({
    [breakpoint]: PropTypes.shape(ColumnGroupBreakpointPropTypes),
}))
    .reduce((acc, cv) => (Object.assign({}, acc, cv)), {}), ColumnGroupBreakpointPropTypes, { breakpoint: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), centered: PropTypes.bool, gapless: PropTypes.bool, multiline: PropTypes.bool, vcentered: PropTypes.bool });
//# sourceMappingURL=column-group.js.map