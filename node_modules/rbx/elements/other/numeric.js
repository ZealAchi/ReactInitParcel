import * as tslib_1 from "tslib";
import classNames from "classnames";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
export const Numeric = forwardRefAs((_a, ref) => {
    var { className } = _a, rest = tslib_1.__rest(_a, ["className"]);
    return (React.createElement(Generic, Object.assign({ className: classNames("number", className), ref: ref }, rest)));
}, { as: "p" });
Numeric.displayName = "Numeric";
//# sourceMappingURL=numeric.js.map