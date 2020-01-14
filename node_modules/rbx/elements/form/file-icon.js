import * as tslib_1 from "tslib";
import classNames from "classnames";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
export const FileIcon = forwardRefAs((_a, ref) => {
    var { className } = _a, rest = tslib_1.__rest(_a, ["className"]);
    return (React.createElement(Generic, Object.assign({ className: classNames("file-icon", className), ref: ref }, rest)));
}, { as: "span" });
FileIcon.displayName = "File.Icon";
//# sourceMappingURL=file-icon.js.map