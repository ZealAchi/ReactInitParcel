import * as tslib_1 from "tslib";
import classNames from "classnames";
import React from "react";
import { Generic } from "../../base";
import { combineRefs } from "../../utils";
import { DropdownContext } from "./dropdown-context";
export const DROPDOWN_DEFAULTS = {
    alignments: ["right"],
};
const initialState = {
    active: false,
};
export class DropdownContainer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.handleClick = (event) => {
            if (this.props.managed !== true &&
                this.active &&
                this.ref.current !== null) {
                if (event.target instanceof Element &&
                    !this.ref.current.contains(event.target)) {
                    this.active = false;
                }
            }
        };
        this.state = { active: props.active === true };
    }
    componentDidMount() {
        document.addEventListener("click", this.handleClick);
    }
    componentWillUnmount() {
        document.removeEventListener("click", this.handleClick);
    }
    render() {
        const _a = this.props, { active, align, className, hoverable, innerRef, managed, up } = _a, rest = tslib_1.__rest(_a, ["active", "align", "className", "hoverable", "innerRef", "managed", "up"]);
        return (React.createElement(DropdownContext.Provider, { value: {
                active: this.active,
                setActive: (value) => (this.active = value),
            } },
            React.createElement(Generic, Object.assign({ className: classNames("dropdown", {
                    [`is-${align}`]: align,
                    "is-active": this.active,
                    "is-hoverable": hoverable,
                    "is-up": up,
                }, className), ref: combineRefs(this.ref, innerRef) }, rest))));
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
DropdownContainer.displayName = "Dropdown.Container";
//# sourceMappingURL=dropdown-container.js.map