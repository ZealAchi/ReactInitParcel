import * as tslib_1 from "tslib";
import classNames from "classnames";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
export const PanelIcon = forwardRefAs((_a, ref) => {
    var { className } = _a, rest = tslib_1.__rest(_a, ["className"]);
    return (React.createElement(Generic, Object.assign({ className: classNames("panel-icon", className), ref: ref }, rest)));
}, { as: "span" });
PanelIcon.displayName = "Panel.Icon";
//# sourceMappingURL=panel-icon.js.map