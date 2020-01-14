import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
import { DEFAULTS } from "../../base/helpers/variables";
import { ColumnGroup } from "./column-group";
export const COLUMN_DEFAULTS = {
    sizes: [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        "one-third",
        "two-thirds",
        "one-quarter",
        "half",
        "three-quarters",
        "one-fifth",
        "two-fifths",
        "three-fifths",
        "four-fifths",
        "full",
    ],
};
export const Column = Object.assign(forwardRefAs((_a, ref) => {
    var { className, mobile, tablet, desktop, widescreen, fullhd, touch, narrow, offset, size } = _a, rest = tslib_1.__rest(_a, ["className", "mobile", "tablet", "desktop", "widescreen", "fullhd", "touch", "narrow", "offset", "size"]);
    const breakpoints = {
        desktop,
        fullhd,
        mobile,
        tablet,
        touch,
        widescreen,
    };
    return (React.createElement(Generic, Object.assign({ className: classNames("column", {
            [`is-${size}`]: size !== undefined,
            [`is-offset-${offset}`]: offset !== undefined,
            "is-narrow": narrow,
        }, Object.keys(breakpoints)
            .map(breakpoint => {
            const value = breakpoints[breakpoint];
            return value === undefined
                ? {}
                : {
                    [`is-${value.size}-${breakpoint}`]: value.size !== undefined,
                    [`is-narrow-${breakpoint}`]: value.narrow,
                    [`is-offset-${value.offset}-${breakpoint}`]: value.offset !== undefined,
                };
        })
            .reduce((acc, cv) => (Object.assign({}, acc, cv)), {}), className), ref: ref }, rest)));
}, { as: "div" }), { Group: ColumnGroup });
Column.displayName = "Column";
const ColumnSizeModifierPropTypes = {
    narrow: PropTypes.bool,
    offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Column.propTypes = Object.assign({}, DEFAULTS.breakpoints
    .map(breakpoint => ({
    [breakpoint]: PropTypes.shape(ColumnSizeModifierPropTypes),
}))
    .reduce((acc, cv) => (Object.assign({}, acc, cv)), {}), ColumnSizeModifierPropTypes);
//# sourceMappingURL=column.js.map