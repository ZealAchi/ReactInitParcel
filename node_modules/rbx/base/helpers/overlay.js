import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import { makePropTypesFactory, makeValidatingTransformFactory, } from "./factory";
export const makePropTypes = makePropTypesFactory(vars => ({
    overlay: PropTypes.bool,
}));
export const transform = props => {
    const { className, overlay } = props, rest = tslib_1.__rest(props, ["className", "overlay"]);
    return Object.assign({ className: classNames({ "is-overlay": overlay }, className) }, rest);
};
export const makeValidatingTransform = makeValidatingTransformFactory(makePropTypes, transform);
//# sourceMappingURL=overlay.js.map