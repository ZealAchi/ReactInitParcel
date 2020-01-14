import * as tslib_1 from "tslib";
import React from "react";
import { renderablePropType } from "../prop-types-extensions";
import { forwardRefAs } from "./exotic";
import { ThemeContext } from "./theme";
export const Generic = forwardRefAs((_a, ref) => {
    var { as } = _a, rest = tslib_1.__rest(_a, ["as"]);
    return (React.createElement(ThemeContext.Consumer, null, ({ transform }) => React.createElement(as, Object.assign({ ref }, transform(rest, "Generic")))));
}, { as: "div" });
Generic.displayName = "Generic";
Generic.propTypes = {
    as: renderablePropType,
};
//# sourceMappingURL=generic.js.map