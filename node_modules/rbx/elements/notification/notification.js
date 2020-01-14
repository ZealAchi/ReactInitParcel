import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
export const Notification = forwardRefAs((_a, ref) => {
    var { className, color } = _a, rest = tslib_1.__rest(_a, ["className", "color"]);
    return (React.createElement(Generic, Object.assign({ className: classNames("notification", { [`is-${color}`]: color }, className), ref: ref }, rest)));
}, { as: "div" });
Notification.displayName = "Notification";
Notification.propTypes = {
    color: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
//# sourceMappingURL=notification.js.map