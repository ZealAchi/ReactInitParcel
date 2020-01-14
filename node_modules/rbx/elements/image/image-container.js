import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
export const IMAGE_CONTAINER_DEFAULTS = {
    dimmensions: [16, 24, 32, 48, 64, 96, 128],
    ratios: [
        "16by9",
        "1by1",
        "1by2",
        "1by3",
        "2by1",
        "2by3",
        "3by1",
        "3by2",
        "3by4",
        "3by5",
        "4by3",
        "4by5",
        "5by3",
        "5by4",
        "9by16",
        "square",
    ],
};
const mapImageContainerChildren = (children, size) => {
    if (typeof size !== "string") {
        return children;
    }
    return React.Children.map(children, (child, i) => {
        if (typeof child === "object" && child !== null && "type" in child) {
            if (child.type !== React.Fragment) {
                return React.cloneElement(child, {
                    className: classNames("has-ratio", child.props.className),
                });
            }
            else {
                const fragmentMapped = mapImageContainerChildren(child.props
                    .children, size);
                return React.createElement(React.Fragment, { children: fragmentMapped });
            }
        }
        return child;
    });
};
export const ImageContainer = forwardRefAs((_a, ref) => {
    var { children, className, size } = _a, rest = tslib_1.__rest(_a, ["children", "className", "size"]);
    let s;
    if (typeof size === "string") {
        s = size;
    }
    else if (typeof size === "number") {
        s = `${size}x${size}`;
    }
    return (React.createElement(Generic, Object.assign({ children: mapImageContainerChildren(children, size), className: classNames("image", { [`is-${s}`]: s }, className), ref: ref }, rest)));
}, { as: "figure" });
ImageContainer.displayName = "Image.Container";
ImageContainer.propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
//# sourceMappingURL=image-container.js.map