import * as tslib_1 from "tslib";
import classNames from "classnames";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
import { MenuLabel } from "./menu-label";
import { MenuList } from "./menu-list";
export const Menu = Object.assign(forwardRefAs((_a, ref) => {
    var { className } = _a, rest = tslib_1.__rest(_a, ["className"]);
    return (React.createElement(Generic, Object.assign({ className: classNames("menu", className), ref: ref }, rest)));
}, { as: "aside" }), {
    Label: MenuLabel,
    List: MenuList,
});
Menu.displayName = "Menu";
//# sourceMappingURL=menu.js.map