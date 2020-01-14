import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
export const SECTION_DEFAULTS = {
    sizes: ["medium", "large"],
};
export const Section = forwardRefAs((_a, ref) => {
    var { className, size } = _a, rest = tslib_1.__rest(_a, ["className", "size"]);
    return (React.createElement(Generic, Object.assign({ className: classNames("section", { [`is-${size}`]: size }, className), ref: ref }, rest)));
}, { as: "section" });
Section.displayName = "Section";
Section.propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
//# sourceMappingURL=section.js.map