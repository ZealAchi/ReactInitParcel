import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
export const PAGINATION_STEP_DEFAULTS = {
    alignments: ["next", "previous"],
};
export const PaginationStep = forwardRefAs((_a, ref) => {
    var { align, className } = _a, rest = tslib_1.__rest(_a, ["align", "className"]);
    return (React.createElement(Generic, Object.assign({ className: classNames({ [`pagination-${align}`]: align }, className), ref: ref }, rest)));
}, { as: "a" });
PaginationStep.displayName = "Pagination.Step";
PaginationStep.propTypes = {
    align: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
//# sourceMappingURL=pagination-step.js.map