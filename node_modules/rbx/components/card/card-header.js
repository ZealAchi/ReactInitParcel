import * as tslib_1 from "tslib";
import classNames from "classnames";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
import { CardHeaderIcon } from "./card-header-icon";
import { CardHeaderTitle } from "./card-header-title";
export const CardHeader = Object.assign(forwardRefAs((_a, ref) => {
    var { className } = _a, rest = tslib_1.__rest(_a, ["className"]);
    return (React.createElement(Generic, Object.assign({ className: classNames("card-header", className), ref: ref }, rest)));
}, { as: "div" }), {
    Icon: CardHeaderIcon,
    Title: CardHeaderTitle,
});
CardHeader.displayName = "Card.Header";
//# sourceMappingURL=card-header.js.map