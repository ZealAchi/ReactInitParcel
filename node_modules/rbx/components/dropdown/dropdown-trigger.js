import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
import { DropdownContext } from "./dropdown-context";
const onClickHandler = (onClick, ctx) => (event) => {
    if (onClick !== undefined) {
        onClick(event);
    }
    ctx.setActive(!ctx.active);
};
export const DropdownTrigger = forwardRefAs((_a, ref) => {
    var { className, onClick } = _a, rest = tslib_1.__rest(_a, ["className", "onClick"]);
    return (React.createElement(DropdownContext.Consumer, null, ctx => (React.createElement(Generic, Object.assign({ className: classNames("dropdown-trigger", className), onClick: onClickHandler(onClick, ctx), ref: ref }, rest)))));
}, { as: "div" });
DropdownTrigger.displayName = "Dropdown.Trigger";
DropdownTrigger.propTypes = {
    onClick: PropTypes.func,
};
//# sourceMappingURL=dropdown-trigger.js.map