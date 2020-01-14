import * as tslib_1 from "tslib";
import classNames from "classnames";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
export const FileLabel = forwardRefAs((_a, ref) => {
    var { className } = _a, rest = tslib_1.__rest(_a, ["className"]);
    return (React.createElement(Generic, Object.assign({ className: classNames("file-label", className), ref: ref }, rest)));
}, { as: "label" });
FileLabel.displayName = "File.Label";
//# sourceMappingURL=file-label.js.map