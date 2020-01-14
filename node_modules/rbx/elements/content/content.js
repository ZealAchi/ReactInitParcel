import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
import { ContentOrderedList } from "./content-ordered-list";
export const CONTENT_DEFAULTS = {
    sizes: ["small", "medium", "large"],
};
export const Content = Object.assign(forwardRefAs((_a, ref) => {
    var { className, size } = _a, rest = tslib_1.__rest(_a, ["className", "size"]);
    return (React.createElement(Generic, Object.assign({ className: classNames("content", { [`is-${size}`]: size }, className), ref: ref }, rest)));
}, { as: "div" }), { OrderedList: ContentOrderedList });
Content.displayName = "Content";
Content.propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
//# sourceMappingURL=content.js.map