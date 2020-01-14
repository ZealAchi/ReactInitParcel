import * as tslib_1 from "tslib";
import classNames from "classnames";
import React from "react";
import { Generic } from "../../base";
import { initialValue, ModalContext } from "./modal-context";
export class ModalPortal extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.close = () => {
            if (this.props.onClose !== undefined) {
                this.props.onClose();
            }
        };
        this.handleKeydown = (event) => {
            if (this.props.closeOnEsc === true && event.code === "Escape") {
                this.close();
            }
        };
    }
    componentDidMount() {
        const { clipped, document } = this.props;
        document.addEventListener("keydown", this.handleKeydown);
        const html = document.querySelector("html");
        if (html !== null) {
            if (clipped === true) {
                html.classList.add("is-clipped");
            }
        }
    }
    componentWillUnmount() {
        const { document } = this.props;
        document.removeEventListener("keydown", this.handleKeydown);
        const html = document.querySelector("html");
        if (html !== null) {
            html.classList.remove("is-clipped");
        }
    }
    render() {
        const _a = this.props, { className, closeOnBlur, closeOnEsc, innerRef, onClose } = _a, rest = tslib_1.__rest(_a, ["className", "closeOnBlur", "closeOnEsc", "innerRef", "onClose"]);
        return (React.createElement(ModalContext.Provider, { value: {
                close: this.close,
                closeOnBlur: closeOnBlur === true,
                closeOnEsc: closeOnEsc === true,
            } },
            React.createElement(Generic, Object.assign({ className: classNames("modal", "is-active", className), ref: innerRef }, rest))));
    }
}
ModalPortal.defaultProps = {
    closeOnBlur: initialValue.closeOnBlur,
    closeOnEsc: initialValue.closeOnEsc,
};
ModalPortal.displayName = "Modal.Portal";
//# sourceMappingURL=modal-portal.js.map