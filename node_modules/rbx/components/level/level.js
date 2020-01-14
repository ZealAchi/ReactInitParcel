import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
import { LevelItem } from "./level-item";
export const Level = Object.assign(forwardRefAs((_a, ref) => {
    var { breakpoint, className } = _a, rest = tslib_1.__rest(_a, ["breakpoint", "className"]);
    return (React.createElement(Generic, Object.assign({ className: classNames("level", { [`is-${breakpoint}`]: breakpoint }, className), ref: ref }, rest)));
}, { as: "nav" }), { Item: LevelItem });
Level.displayName = "Level";
Level.propTypes = {
    breakpoint: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
//# sourceMappingURL=level.js.map