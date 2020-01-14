import * as tslib_1 from "tslib";
import classNames from "classnames";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
import { ModalCardBody } from "./modal-card-body";
import { ModalCardFoot } from "./modal-card-foot";
import { ModalCardHead } from "./modal-card-head";
import { ModalCardTitle } from "./modal-card-title";
export const ModalCard = Object.assign(forwardRefAs((_a, ref) => {
    var { className } = _a, rest = tslib_1.__rest(_a, ["className"]);
    return (React.createElement(Generic, Object.assign({ className: classNames("modal-card", className), ref: ref }, rest)));
}, { as: "div" }), {
    Body: ModalCardBody,
    Foot: ModalCardFoot,
    Head: ModalCardHead,
    Title: ModalCardTitle,
});
ModalCard.displayName = "Modal.Card";
//# sourceMappingURL=modal-card.js.map