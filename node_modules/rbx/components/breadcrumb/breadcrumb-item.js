import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
export const BreadcrumbItem = forwardRefAs((_a, ref) => {
    var { active } = _a, rest = tslib_1.__rest(_a, ["active"]);
    return (React.createElement("li", { className: classNames({ "is-active": active }) },
        React.createElement(Generic, Object.assign({ ref: ref }, rest))));
}, { as: "a" });
BreadcrumbItem.displayName = "Breadcrumb.Item";
BreadcrumbItem.propTypes = {
    active: PropTypes.bool,
};
//# sourceMappingURL=breadcrumb-item.js.map