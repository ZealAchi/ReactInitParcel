import * as tslib_1 from "tslib";
import classNames from "classnames";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
export const CardImage = forwardRefAs((_a, ref) => {
    var { className } = _a, rest = tslib_1.__rest(_a, ["className"]);
    return (React.createElement(Generic, Object.assign({ className: classNames("card-image", className), ref: ref }, rest)));
}, { as: "div" });
CardImage.displayName = "Card.Image";
//# sourceMappingURL=card-image.js.map