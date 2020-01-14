import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
export const DELETE_DEFAULTS = {
    sizes: ["small", "medium", "large"],
};
export const Delete = forwardRefAs((_a, ref) => {
    var { className, size } = _a, rest = tslib_1.__rest(_a, ["className", "size"]);
    return (React.createElement(Generic, Object.assign({ className: classNames("delete", { [`is-${size}`]: size }, className), ref: ref }, rest)));
}, { as: "a" });
Delete.displayName = "Delete";
Delete.propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
//# sourceMappingURL=delete.js.map