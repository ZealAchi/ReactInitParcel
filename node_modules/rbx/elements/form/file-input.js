import * as tslib_1 from "tslib";
import classNames from "classnames";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
export const FileInput = forwardRefAs((_a, ref) => {
    var { className } = _a, rest = tslib_1.__rest(_a, ["className"]);
    return (React.createElement(Generic, Object.assign({ className: classNames("file-input", className), ref: ref, type: "file" }, rest)));
}, { as: "input" });
FileInput.displayName = "File.Input";
//# sourceMappingURL=file-input.js.map