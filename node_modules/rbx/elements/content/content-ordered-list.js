import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
import { ContentOrderedListItem } from "./content-ordered-list-item";
export const CONTENT_ORDERED_LIST_DEFAULTS = {
    types: ["lower-alpha", "lower-roman", "upper-alpha", "upper-roman"],
};
export const ContentOrderedList = Object.assign(forwardRefAs((_a, ref) => {
    var { className, type } = _a, rest = tslib_1.__rest(_a, ["className", "type"]);
    return (React.createElement(Generic, Object.assign({ className: classNames({ [`is-${type}`]: type }, className), ref: ref }, rest)));
}, { as: "ol" }), { Item: ContentOrderedListItem });
ContentOrderedList.displayName = "Content.OrderedList";
ContentOrderedList.propTypes = {
    type: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
//# sourceMappingURL=content-ordered-list.js.map