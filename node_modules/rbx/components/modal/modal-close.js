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
    ctx.close();
};
export const ModalClose = forwardRefAs((_a, ref) => {
    var { className, onClick } = _a, rest = tslib_1.__rest(_a, ["className", "onClick"]);
    return (React.createElement(ModalContext.Consumer, null, ctx => (React.createElement(Generic, Object.assign({ "aria-label": "close", className: classNames("modal-close", "is-large", className), onClick: onClickHandler(onClick, ctx), ref: ref }, rest)))));
}, { as: "button" });
ModalClose.displayName = "Modal.Close";
ModalClose.propTypes = {
    onClick: PropTypes.func,
};
//# sourceMappingURL=modal-close.js.map