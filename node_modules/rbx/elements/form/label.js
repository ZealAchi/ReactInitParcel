import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
import { Checkbox } from "./checkbox";
import { Radio } from "./radio";
export const LABEL_DEFAULTS = {
    sizes: ["small", "medium", "large"],
};
const identifyLabelDiscriminator = (children) => {
    let discriminator = "label";
    React.Children.forEach(children, (child, i) => {
        if (typeof child === "object" && child !== null && "type" in child) {
            if (child.type === Checkbox ||
                (child.type === "input" &&
                    child.props.type ===
                        "checkbox")) {
                discriminator = "checkbox";
            }
            else if (child.type === Radio ||
                (child.type === "input" &&
                    child.props.type === "radio")) {
                discriminator = "radio";
            }
            else if (child.type === React.Fragment) {
                discriminator = identifyLabelDiscriminator(child.props
                    .children);
            }
        }
    });
    return discriminator;
};
export const Label = forwardRefAs((_a, ref) => {
    var { className, disabled, size } = _a, rest = tslib_1.__rest(_a, ["className", "disabled", "size"]);
    const discriminator = identifyLabelDiscriminator(rest.children);
    return (React.createElement(Generic, Object.assign({ className: classNames({
            [`${discriminator}`]: discriminator,
            "is-disabled": disabled,
            [`is-${size}`]: size,
        }, className), ref: ref }, rest)));
}, { as: "label" });
Label.displayName = "Label";
Label.propTypes = {
    disabled: PropTypes.bool,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
//# sourceMappingURL=label.js.map