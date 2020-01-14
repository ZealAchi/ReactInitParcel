import * as tslib_1 from "tslib";
import classNames from "classnames";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
export const ModalCardTitle = forwardRefAs((_a, ref) => {
    var { className } = _a, rest = tslib_1.__rest(_a, ["className"]);
    return (React.createElement(Generic, Object.assign({ className: classNames("modal-card-title", className), ref: ref }, rest)));
}, { as: "p" });
ModalCardTitle.displayName = "Modal.Card.Title";
//# sourceMappingURL=modal-card-title.js.map