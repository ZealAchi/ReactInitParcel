import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
export const CARD_HEADER_TITLE_DEFAULTS = {
    alignments: ["centered"],
};
export const CardHeaderTitle = forwardRefAs((_a, ref) => {
    var { align, className } = _a, rest = tslib_1.__rest(_a, ["align", "className"]);
    return (React.createElement(Generic, Object.assign({ className: classNames("card-header-title", { [`is-${align}`]: align }, className), ref: ref }, rest)));
}, { as: "div" });
CardHeaderTitle.displayName = "Card.Header.Title";
CardHeaderTitle.propTypes = {
    align: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
//# sourceMappingURL=card-header-title.js.map