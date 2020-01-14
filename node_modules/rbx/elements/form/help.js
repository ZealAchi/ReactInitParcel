import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
export const Help = forwardRefAs((_a, ref) => {
    var { className, color } = _a, rest = tslib_1.__rest(_a, ["className", "color"]);
    return (React.createElement(Generic, Object.assign({ className: classNames("help", { [`is-${color}`]: color }, className), ref: ref }, rest)));
}, { as: "p" });
Help.displayName = "Help";
Help.propTypes = {
    color: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
//# sourceMappingURL=help.js.map