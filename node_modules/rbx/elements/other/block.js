import * as tslib_1 from "tslib";
import classNames from "classnames";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
export const Block = forwardRefAs((_a, ref) => {
    var { className } = _a, rest = tslib_1.__rest(_a, ["className"]);
    return (React.createElement(Generic, Object.assign({ className: classNames("block", className), ref: ref }, rest)));
}, { as: "div" });
Block.displayName = "Block";
//# sourceMappingURL=block.js.map