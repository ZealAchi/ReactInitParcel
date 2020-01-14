import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
import { NavbarItemContext, } from "./navbar-item-context";
const handleOnClick = (onClick, ctx) => (event) => {
    if (onClick !== undefined) {
        onClick(event);
    }
    ctx.setActive(!ctx.active);
};
export const NavbarLink = forwardRefAs((_a, ref) => {
    var { arrowless, className, onClick } = _a, rest = tslib_1.__rest(_a, ["arrowless", "className", "onClick"]);
    return (React.createElement(NavbarItemContext.Consumer, null, ctx => (React.createElement(Generic, Object.assign({ className: classNames("navbar-link", { "is-arrowless": arrowless }, className), onClick: handleOnClick(onClick, ctx), ref: ref }, rest)))));
}, { as: "span" });
NavbarLink.displayName = "Navbar.Link";
NavbarLink.propTypes = {
    arrowless: PropTypes.bool,
    onClick: PropTypes.func,
};
//# sourceMappingURL=navbar-link.js.map