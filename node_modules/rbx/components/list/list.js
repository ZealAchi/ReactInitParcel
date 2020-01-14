import * as tslib_1 from "tslib";
import classNames from "classnames";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
import { ListItem } from "./list-item";
export const List = Object.assign(forwardRefAs((_a, ref) => {
    var { className } = _a, rest = tslib_1.__rest(_a, ["className"]);
    return (React.createElement(Generic, Object.assign({ className: classNames("list", className), ref: ref }, rest)));
}, { as: "div" }), { Item: ListItem });
List.displayName = "List";
//# sourceMappingURL=list.js.map