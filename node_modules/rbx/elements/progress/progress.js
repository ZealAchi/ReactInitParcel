import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
export const PROGRESS_DEFAULTS = {
    sizes: ["small", "medium", "large"],
};
export const Progress = forwardRefAs((_a, ref) => {
    var { className, color, size } = _a, rest = tslib_1.__rest(_a, ["className", "color", "size"]);
    return (React.createElement(Generic, Object.assign({ className: classNames("progress", {
            [`is-${color}`]: color,
            [`is-${size}`]: size,
        }, className), ref: ref }, rest)));
}, {
    as: "progress",
    max: 100,
});
Progress.displayName = "Progress";
Progress.propTypes = {
    color: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    max: PropTypes.number,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    value: PropTypes.number,
};
//# sourceMappingURL=progress.js.map