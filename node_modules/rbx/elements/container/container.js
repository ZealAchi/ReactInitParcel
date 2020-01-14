import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
export const Container = forwardRefAs((_a, ref) => {
    var { className, fluid, breakpoint } = _a, rest = tslib_1.__rest(_a, ["className", "fluid", "breakpoint"]);
    return (React.createElement(Generic, Object.assign({ className: classNames("container", {
            [`is-${breakpoint}`]: breakpoint,
            "is-fluid": fluid,
        }, className), ref: ref }, rest)));
}, { as: "div" });
Container.displayName = "Container";
Container.propTypes = {
    breakpoint: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    fluid: PropTypes.bool,
};
//# sourceMappingURL=container.js.map