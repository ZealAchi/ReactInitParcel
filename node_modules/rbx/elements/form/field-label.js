import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
export const FIELD_LABEL_DEFAULTS = {
    sizes: ["small", "normal", "medium", "large"],
};
export const FieldLabel = forwardRefAs((_a, ref) => {
    var { className, size } = _a, rest = tslib_1.__rest(_a, ["className", "size"]);
    return (React.createElement(Generic, Object.assign({ className: classNames("field-label", { [`is-${size}`]: size }, className), ref: ref }, rest)));
}, { as: "div" });
FieldLabel.displayName = "Field.Label";
FieldLabel.propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
//# sourceMappingURL=field-label.js.map