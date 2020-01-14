import * as tslib_1 from "tslib";
import classNames from "classnames";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
import { MenuListItem } from "./menu-list-item";
export const MenuList = Object.assign(forwardRefAs((_a, ref) => {
    var { className } = _a, rest = tslib_1.__rest(_a, ["className"]);
    return (React.createElement(Generic, Object.assign({ className: classNames("menu-list", className), ref: ref }, rest)));
}, { as: "ul" }), { Item: MenuListItem });
MenuList.displayName = "Menu.List";
//# sourceMappingURL=menu-list.js.map