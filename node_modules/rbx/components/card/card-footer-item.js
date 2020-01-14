import * as tslib_1 from "tslib";
import classNames from "classnames";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
export const CardFooterItem = forwardRefAs((_a, ref) => {
    var { className } = _a, rest = tslib_1.__rest(_a, ["className"]);
    return (React.createElement(Generic, Object.assign({ className: classNames("card-footer-item", className), ref: ref }, rest)));
}, { as: "div" });
CardFooterItem.displayName = "Card.Footer.Item";
//# sourceMappingURL=card-footer-item.js.map