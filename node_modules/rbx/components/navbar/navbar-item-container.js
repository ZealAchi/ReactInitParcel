import * as tslib_1 from "tslib";
import classNames from "classnames";
import React from "react";
import { Generic } from "../../base";
import { combineRefs } from "../../utils";
import { NavbarItemContext, } from "./navbar-item-context";
export class NavbarItemContainer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.handleDocumentClick = (event) => {
            if (this.props.managed !== true &&
                this.active &&
                this.ref.current !== null) {
                if (event.target instanceof Element &&
                    !this.ref.current.contains(event.target)) {
                    this.active = false;
                }
            }
        };
        this.handleOnClick = (ctx) => (event) => {
            if (this.props.onClick !== undefined) {
                this.props.onClick(event);
            }
            ctx.setActive(!ctx.active);
        };
        this.state = { active: props.active === true };
    }
    componentDidMount() {
        if (this.props.dropdown === true) {
            document.addEventListener("click", this.handleDocumentClick);
        }
    }
    componentWillUnmount() {
        document.removeEventListener("click", this.handleDocumentClick);
    }
    render() {
        const _a = this.props, { as, active, className: initialClassName, dropdown, expanded, hoverable, innerRef, managed, onClick, tab, up } = _a, rest = tslib_1.__rest(_a, ["as", "active", "className", "dropdown", "expanded", "hoverable", "innerRef", "managed", "onClick", "tab", "up"]);
        const className = classNames("navbar-item", {
            "has-dropdown": dropdown,
            "has-dropdown-up": up,
            "is-active": this.active,
            "is-expanded": expanded,
            "is-hoverable": hoverable,
            "is-tab": tab,
        }, initialClassName);
        const ref = combineRefs(this.ref, innerRef);
        if (dropdown === true) {
            const asOverride = as === "a" ? "div" : as;
            return (React.createElement(NavbarItemContext.Provider, { value: {
                    active: this.active,
                    setActive: (value) => (this.active = value),
                } },
                React.createElement(Generic, Object.assign({ as: asOverride, className: className, ref: ref }, rest))));
        }
        return (React.createElement(NavbarItemContext.Consumer, null, ctx => (React.createElement(Generic, Object.assign({ as: as, className: className, onClick: this.handleOnClick(ctx), ref: ref }, rest)))));
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
}
NavbarItemContainer.displayName = "Navbar.Item.Container";
//# sourceMappingURL=navbar-item-container.js.map