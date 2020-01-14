import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
import { HeroBody } from "./hero-body";
import { HeroFoot } from "./hero-foot";
import { HeroHead } from "./hero-head";
export const HERO_DEFAULTS = {
    sizes: [
        "small",
        "medium",
        "large",
        "fullheight",
        "fullheight-with-navbar",
    ],
};
export const Hero = Object.assign(forwardRefAs((_a, ref) => {
    var { className, color, gradient, size } = _a, rest = tslib_1.__rest(_a, ["className", "color", "gradient", "size"]);
    return (React.createElement(Generic, Object.assign({ className: classNames("hero", {
            "is-bold": gradient,
            [`is-${color}`]: color,
            [`is-${size}`]: size,
        }, className), ref: ref }, rest)));
}, { as: "section" }), {
    Body: HeroBody,
    Foot: HeroFoot,
    Head: HeroHead,
});
Hero.displayName = "Hero";
Hero.propTypes = {
    color: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    gradient: PropTypes.bool,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
//# sourceMappingURL=hero.js.map