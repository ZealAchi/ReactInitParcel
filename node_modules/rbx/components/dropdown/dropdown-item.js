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
    ctx.setActive(false);
};
export const DropdownItem = forwardRefAs((_a, ref) => {
    var { active, className, onClick } = _a, rest = tslib_1.__rest(_a, ["active", "className", "onClick"]);
    return (React.createElement(DropdownContext.Consumer, null, ctx => (React.createElement(Generic, Object.assign({ className: classNames("dropdown-item", { "is-active": active }, className), onClick: onClickHandler(onClick, ctx), ref: ref }, rest)))));
}, { as: "a" });
DropdownItem.displayName = "Dropdown.Item";
DropdownItem.propTypes = {
    active: PropTypes.bool,
    onClick: PropTypes.func,
};
//# sourceMappingURL=dropdown-item.js.map