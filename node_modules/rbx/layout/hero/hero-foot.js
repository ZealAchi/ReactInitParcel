import * as tslib_1 from "tslib";
import classNames from "classnames";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
export const HeroFoot = forwardRefAs((_a, ref) => {
    var { className } = _a, rest = tslib_1.__rest(_a, ["className"]);
    return (React.createElement(Generic, Object.assign({ className: classNames("hero-foot", className), ref: ref }, rest)));
}, { as: "div" });
HeroFoot.displayName = "Hero.Foot";
//# sourceMappingURL=hero-foot.js.map