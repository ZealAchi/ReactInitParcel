import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
import { ModalContext } from "./modal-context";
const onClickHandler = (onClick, ctx) => (event) => {
    if (onClick !== undefined) {
        onClick(event);
    }
    if (ctx.closeOnBlur) {
        ctx.close();
    }
};
export const ModalBackground = forwardRefAs((_a, ref) => {
    var { className, onClick } = _a, rest = tslib_1.__rest(_a, ["className", "onClick"]);
    return (React.createElement(ModalContext.Consumer, null, ctx => (React.createElement(Generic, Object.assign({ className: classNames("modal-background", className), onClick: onClickHandler(onClick, ctx), ref: ref, role: "presentation" }, rest)))));
}, { as: "div" });
ModalBackground.displayName = "Modal.Background";
ModalBackground.propTypes = {
    onClick: PropTypes.func,
};
//# sourceMappingURL=modal-background.js.map