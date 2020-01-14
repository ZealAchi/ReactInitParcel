import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
import { ImageContainer } from "./image-container";
export const Image = Object.assign(forwardRefAs((_a, ref) => {
    var { className, rounded } = _a, rest = tslib_1.__rest(_a, ["className", "rounded"]);
    return (React.createElement(Generic, Object.assign({ className: classNames({ "is-rounded": rounded }, className), ref: ref }, rest)));
}, { as: "img" }), { Container: ImageContainer });
Image.displayName = "Image";
Image.propTypes = {
    rounded: PropTypes.bool,
};
//# sourceMappingURL=image.js.map