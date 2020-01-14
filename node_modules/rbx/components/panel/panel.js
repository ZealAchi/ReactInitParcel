import * as tslib_1 from "tslib";
import classNames from "classnames";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
import { PanelBlock } from "./panel-block";
import { PanelHeading } from "./panel-heading";
import { PanelIcon } from "./panel-icon";
import { PanelTab } from "./panel-tab";
export const Panel = Object.assign(forwardRefAs((_a, ref) => {
    var { className } = _a, rest = tslib_1.__rest(_a, ["className"]);
    return (React.createElement(Generic, Object.assign({ className: classNames("panel", className), ref: ref }, rest)));
}, { as: "nav" }), {
    Block: PanelBlock,
    Heading: PanelHeading,
    Icon: PanelIcon,
    Tab: PanelTab,
});
Panel.displayName = "Panel";
//# sourceMappingURL=panel.js.map