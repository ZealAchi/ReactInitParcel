import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
import { MessageBody } from "./message-body";
import { MessageHeader } from "./message-header";
export const MESSAGE_DEFAULTS = {
    sizes: ["small", "medium", "large"],
};
export const Message = Object.assign(forwardRefAs((_a, ref) => {
    var { className, color, size } = _a, rest = tslib_1.__rest(_a, ["className", "color", "size"]);
    return (React.createElement(Generic, Object.assign({ className: classNames("message", {
            [`is-${color}`]: color,
            [`is-${size}`]: size,
        }, className), ref: ref }, rest)));
}, { as: "article" }), {
    Body: MessageBody,
    Header: MessageHeader,
});
Message.displayName = "Message";
Message.propTypes = {
    color: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
//# sourceMappingURL=message.js.map