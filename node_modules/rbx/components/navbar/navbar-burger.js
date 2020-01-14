import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
import { NavbarContext } from "./navbar-context";
const onClickHandler = (onClick, ctx) => (event) => {
    if (onClick !== undefined) {
        onClick(event);
    }
    ctx.setActive(!ctx.active);
};
export const NavbarBurger = forwardRefAs((_a, ref) => {
    var { className, onClick } = _a, rest = tslib_1.__rest(_a, ["className", "onClick"]);
    return (React.createElement(NavbarContext.Consumer, null, ctx => (React.createElement(Generic, Object.assign({ className: classNames("navbar-burger", { "is-active": ctx.active }, className), onClick: onClickHandler(onClick, ctx), ref: ref, role: "button" }, rest),
        React.createElement("span", null),
        React.createElement("span", null),
        React.createElement("span", null)))));
}, { as: "div" });
NavbarBurger.displayName = "Navbar.Burger";
NavbarBurger.propTypes = {
    onClick: PropTypes.func,
};
//# sourceMappingURL=navbar-burger.js.map