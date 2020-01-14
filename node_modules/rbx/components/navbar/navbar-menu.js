import * as tslib_1 from "tslib";
import classNames from "classnames";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
import { NavbarContext } from "./navbar-context";
export const NavbarMenu = forwardRefAs((_a, ref) => {
    var { className } = _a, rest = tslib_1.__rest(_a, ["className"]);
    return (React.createElement(NavbarContext.Consumer, null, ({ active }) => (React.createElement(Generic, Object.assign({ className: classNames("navbar-menu", { "is-active": active }, className), ref: ref }, rest)))));
}, { as: "div" });
NavbarMenu.displayName = "Navbar.Menu";
//# sourceMappingURL=navbar-menu.js.map