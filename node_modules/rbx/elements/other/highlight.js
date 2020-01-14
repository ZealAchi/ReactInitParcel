import * as tslib_1 from "tslib";
import classNames from "classnames";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
export const Highlight = forwardRefAs((_a, ref) => {
    var { className } = _a, rest = tslib_1.__rest(_a, ["className"]);
    return (React.createElement(Generic, Object.assign({ className: classNames("highlight", className), ref: ref }, rest)));
}, { as: "p" });
Highlight.displayName = "Highlight";
//# sourceMappingURL=highlight.js.map