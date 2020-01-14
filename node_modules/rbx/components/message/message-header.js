import * as tslib_1 from "tslib";
import classNames from "classnames";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
export const MessageHeader = forwardRefAs((_a, ref) => {
    var { className } = _a, rest = tslib_1.__rest(_a, ["className"]);
    return (React.createElement(Generic, Object.assign({ className: classNames("message-header", className), ref: ref }, rest)));
}, { as: "div" });
MessageHeader.displayName = "Message.Header";
//# sourceMappingURL=message-header.js.map