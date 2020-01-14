import * as tslib_1 from "tslib";
import classNames from "classnames";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
export const MessageBody = forwardRefAs((_a, ref) => {
    var { className } = _a, rest = tslib_1.__rest(_a, ["className"]);
    return (React.createElement(Generic, Object.assign({ className: classNames("message-body", className), ref: ref }, rest)));
}, { as: "div" });
MessageBody.displayName = "Message.Body";
//# sourceMappingURL=message-body.js.map