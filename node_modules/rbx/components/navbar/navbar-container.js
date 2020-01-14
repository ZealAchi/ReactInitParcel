import * as tslib_1 from "tslib";
import classNames from "classnames";
import React from "react";
import { Generic } from "../../base";
import { canUseDOM } from "../../utils";
import { NavbarContext } from "./navbar-context";
export const NAVBAR_DEFAULTS = {
    fixedAlignments: ["top", "bottom"],
};
export class NavbarContainer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { active: props.active === true };
    }
    componentWillUnmount() {
        const { fixed } = this.props;
        const html = this.document.querySelector("html");
        if (html !== null) {
            html.classList.remove(`has-navbar-fixed-${fixed}`);
        }
    }
    render() {
        this.manageHtmlAttributes();
        const _a = this.props, { active, className, color, fixed, innerRef, managed, transparent } = _a, rest = tslib_1.__rest(_a, ["active", "className", "color", "fixed", "innerRef", "managed", "transparent"]);
        return (React.createElement(NavbarContext.Provider, { value: {
                active: this.active,
                setActive: (value) => {
                    this.active = value;
                },
            } },
            React.createElement(Generic, Object.assign({ className: classNames("navbar", {
                    "is-transparent": transparent,
                    [`is-fixed-${fixed}`]: fixed,
                    [`is-${color}`]: color,
                }, className), ref: innerRef, role: "navigation" }, rest))));
    }
    get active() {
        return this.props.managed === true
            ? this.props.active === true
            : this.state.active;
    }
    set active(value) {
        if (this.props.managed !== true) {
            this.setState({ active: value });
        }
    }
    get document() {
        return this.props.document !== undefined ? this.props.document : document;
    }
    manageHtmlAttributes() {
        if (canUseDOM()) {
            const html = this.document.querySelector("html");
            if (html !== null) {
                html.classList.remove("has-navbar-fixed-top");
                html.classList.remove("has-navbar-fixed-bottom");
                if (this.props.fixed !== undefined) {
                    html.classList.add(`has-navbar-fixed-${this.props.fixed}`);
                }
            }
        }
    }
}
NavbarContainer.defaultProps = {
    transparent: false,
};
NavbarContainer.displayName = "Navbar.Container";
//# sourceMappingURL=navbar-container.js.map