import * as tslib_1 from "tslib";
import classNames from "classnames";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
export const FieldBody = forwardRefAs((_a, ref) => {
    var { className } = _a, rest = tslib_1.__rest(_a, ["className"]);
    return (React.createElement(Generic, Object.assign({ className: classNames("field-body", className), ref: ref }, rest)));
}, { as: "div" });
FieldBody.displayName = "Field.Body";
//# sourceMappingURL=field-body.js.map