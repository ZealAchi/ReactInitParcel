import * as tslib_1 from "tslib";
import classNames from "classnames";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
export const HeroHead = forwardRefAs((_a, ref) => {
    var { className } = _a, rest = tslib_1.__rest(_a, ["className"]);
    return (React.createElement(Generic, Object.assign({ className: classNames("hero-head", className), ref: ref }, rest)));
}, { as: "div" });
HeroHead.displayName = "Hero.Head";
//# sourceMappingURL=hero-head.js.map