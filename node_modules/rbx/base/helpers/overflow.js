import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import { makePropTypesFactory, makeValidatingTransformFactory, } from "./factory";
export const makePropTypes = makePropTypesFactory(vars => ({
    clipped: PropTypes.bool,
}));
export const transform = props => {
    const { className, clipped } = props, rest = tslib_1.__rest(props, ["className", "clipped"]);
    return Object.assign({ className: classNames({ "is-clipped": clipped }, className) }, rest);
};
export const makeValidatingTransform = makeValidatingTransformFactory(makePropTypes, transform);
//# sourceMappingURL=overflow.js.map