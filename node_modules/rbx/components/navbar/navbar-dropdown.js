import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
export const NAVBAR_DROPDOWN_DEFAULTS = {
    alignments: ["right"],
};
export const NavbarDropdown = forwardRefAs((_a, ref) => {
    var { align, boxed, className } = _a, rest = tslib_1.__rest(_a, ["align", "boxed", "className"]);
    return (React.createElement(Generic, Object.assign({ className: classNames("navbar-dropdown", {
            [`is-${align}`]: align,
            "is-boxed": boxed,
        }, className), ref: ref }, rest)));
}, { as: "span" });
NavbarDropdown.displayName = "Navbar.Dropdown";
NavbarDropdown.propTypes = {
    align: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    boxed: PropTypes.bool,
};
//# sourceMappingURL=navbar-dropdown.js.map