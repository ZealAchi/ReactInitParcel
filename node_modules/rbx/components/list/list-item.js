import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
export const ListItem = forwardRefAs((_a, ref) => {
    var { active, className } = _a, rest = tslib_1.__rest(_a, ["active", "className"]);
    return (React.createElement(Generic, Object.assign({ className: classNames("list-item", { "is-active": active }, className), ref: ref }, rest)));
}, { as: "a" });
ListItem.displayName = "List.Item";
ListItem.propTypes = {
    active: PropTypes.bool,
};
//# sourceMappingURL=list-item.js.map