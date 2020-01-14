import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
import { PanelTabGroup } from "./panel-tab-group";
export const PanelTab = Object.assign(forwardRefAs((_a, ref) => {
    var { active, className } = _a, rest = tslib_1.__rest(_a, ["active", "className"]);
    return (React.createElement(Generic, Object.assign({ className: classNames({ "is-active": active }, className), ref: ref }, rest)));
}, { as: "a" }), { Group: PanelTabGroup });
PanelTab.displayName = "Panel.Tab";
PanelTab.propTypes = {
    active: PropTypes.bool,
};
//# sourceMappingURL=panel-tab.js.map