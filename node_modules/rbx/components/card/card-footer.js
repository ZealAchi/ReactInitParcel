import * as tslib_1 from "tslib";
import classNames from "classnames";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
import { CardFooterItem } from "./card-footer-item";
export const CardFooter = Object.assign(forwardRefAs((_a, ref) => {
    var { className } = _a, rest = tslib_1.__rest(_a, ["className"]);
    return (React.createElement(Generic, Object.assign({ className: classNames("card-footer", className), ref: ref }, rest)));
}, { as: "div" }), { Item: CardFooterItem });
CardFooter.displayName = "Card.Footer";
//# sourceMappingURL=card-footer.js.map