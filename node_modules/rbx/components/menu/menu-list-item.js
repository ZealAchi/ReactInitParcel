import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
export const MenuListItem = forwardRefAs((_a, ref) => {
    var { active, className, menu } = _a, rest = tslib_1.__rest(_a, ["active", "className", "menu"]);
    return (React.createElement("li", null,
        React.createElement(Generic, Object.assign({ className: classNames({ "is-active": active }, className), ref: ref }, rest)),
        menu));
}, { as: "a" });
MenuListItem.displayName = "Menu.List.Item";
MenuListItem.propTypes = {
    active: PropTypes.bool,
    menu: PropTypes.node,
};
//# sourceMappingURL=menu-list-item.js.map