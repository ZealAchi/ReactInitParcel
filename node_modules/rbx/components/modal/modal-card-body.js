import * as tslib_1 from "tslib";
import classNames from "classnames";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
export const ModalCardBody = forwardRefAs((_a, ref) => {
    var { className } = _a, rest = tslib_1.__rest(_a, ["className"]);
    return (React.createElement(Generic, Object.assign({ className: classNames("modal-card-body", className), ref: ref }, rest)));
}, { as: "section" });
ModalCardBody.displayName = "Modal.Card.Body";
//# sourceMappingURL=modal-card-body.js.map