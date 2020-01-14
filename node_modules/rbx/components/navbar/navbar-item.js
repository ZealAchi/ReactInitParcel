import PropTypes from "prop-types";
import React from "react";
import { forwardRefAs } from "../../base";
import { NavbarItemContainer, } from "./navbar-item-container";
export const NavbarItem = Object.assign(forwardRefAs((props, ref) => React.createElement(NavbarItemContainer, Object.assign({ innerRef: ref }, props)), { as: "a" }), { Container: NavbarItemContainer });
NavbarItem.displayName = "Navbar.Item";
NavbarItem.propTypes = {
    active: PropTypes.bool,
    dropdown: PropTypes.bool,
    expanded: PropTypes.bool,
    hoverable: PropTypes.bool,
    managed: PropTypes.bool,
    onClick: PropTypes.func,
    tab: PropTypes.bool,
    up: PropTypes.bool,
};
//# sourceMappingURL=navbar-item.js.map