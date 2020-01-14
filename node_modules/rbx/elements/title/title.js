import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
export const TITLE_DEFAULTS = {
    sizes: [1, 2, 3, 4, 5, 6],
};
export const Title = forwardRefAs((_a, ref) => {
    var { className, size, spaced, subtitle } = _a, rest = tslib_1.__rest(_a, ["className", "size", "spaced", "subtitle"]);
    return (React.createElement(Generic, Object.assign({ className: classNames({
            [`is-${size}`]: size !== undefined,
            "is-spaced": spaced === true && subtitle !== true,
            subtitle,
            title: subtitle !== true,
        }, className), ref: ref }, rest)));
}, { as: "h1" });
Title.displayName = "Title";
Title.propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    spaced: PropTypes.bool,
    subtitle: PropTypes.bool,
};
//# sourceMappingURL=title.js.map