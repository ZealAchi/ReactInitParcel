import * as tslib_1 from "tslib";
import React from "react";
import ReactDOM from "react-dom";
import { canUseDOM } from "../../utils";
import { ModalPortal } from "./modal-portal";
export class ModalContainer extends React.PureComponent {
    constructor(props) {
        super(props);
        if (canUseDOM()) {
            this.el = this.document.createElement("div");
            if (props.containerClassName !== undefined) {
                this.el.className = props.containerClassName;
            }
        }
    }
    componentDidMount() {
        if (this.el !== undefined) {
            this.document.body.appendChild(this.el);
        }
    }
    componentWillUnmount() {
        if (this.el !== undefined) {
            this.document.body.removeChild(this.el);
        }
    }
    render() {
        const _a = this.props, { active, containerClassName, document } = _a, rest = tslib_1.__rest(_a, ["active", "containerClassName", "document"]);
        return this.el !== undefined && active === true
            ? ReactDOM.createPortal(React.createElement(ModalPortal, Object.assign({ document: this.document }, rest)), this.el)
            : false;
    }
    get document() {
        return this.props.document !== undefined ? this.props.document : document;
    }
}
ModalContainer.displayName = "Modal.Container";
//# sourceMappingURL=modal-container.js.map