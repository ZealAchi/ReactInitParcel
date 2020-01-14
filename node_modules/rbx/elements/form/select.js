import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
import { SelectOption } from "./select-option";
export const SELECT_CONTAINER_DEFAULTS = {
    sizes: ["small", "medium", "large"],
    states: ["focused", "hovered", "loading"],
};
const mapSelectContainerChildren = (children, state) => {
    let classNameExtension;
    const mapped = React.Children.map(children, (child, i) => {
        if (typeof child === "object" && child !== null && "type" in child) {
            if (child.type === "select" || child.type === Select) {
                classNameExtension = classNames({
                    "is-multiple": child.props
                        .multiple,
                });
                if (state === "focused" || state === "hovered") {
                    return React.cloneElement(child, {
                        className: classNames(`is-${state}`, child.props.className),
                    });
                }
                return child;
            }
            else if (child.type === React.Fragment) {
                const fragmentMapped = mapSelectContainerChildren(child.props
                    .children, state);
                classNameExtension = classNames(classNameExtension, fragmentMapped.classNameExtension);
                return React.createElement(React.Fragment, { children: fragmentMapped.children });
            }
        }
        return child;
    });
    return { children: mapped, classNameExtension };
};
export const SelectContainer = forwardRefAs((_a, ref) => {
    var { className, children, color, fullwidth, rounded, size, state } = _a, rest = tslib_1.__rest(_a, ["className", "children", "color", "fullwidth", "rounded", "size", "state"]);
    const mapped = mapSelectContainerChildren(children, state);
    return (React.createElement(Generic, Object.assign({ className: classNames("select", {
            [`is-${color}`]: color,
            "is-fullwidth": fullwidth,
            "is-loading": state === "loading",
            "is-rounded": rounded,
            [`is-${size}`]: size,
        }, mapped.classNameExtension, className), children: mapped.children, ref: ref }, rest)));
}, { as: "div" });
SelectContainer.displayName = "Select.Container";
SelectContainer.propTypes = {
    color: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    fullwidth: PropTypes.bool,
    rounded: PropTypes.bool,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    state: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export const Select = Object.assign(forwardRefAs((props, ref) => React.createElement(Generic, Object.assign({ ref: ref }, props)), {
    as: "select",
}), {
    Container: SelectContainer,
    Option: SelectOption,
});
Select.displayName = "Select";
//# sourceMappingURL=select.js.map