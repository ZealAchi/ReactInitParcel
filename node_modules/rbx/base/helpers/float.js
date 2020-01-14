import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import { makePropTypesFactory, makeValidatingTransformFactory, } from "./factory";
export const makePropTypes = makePropTypesFactory(vars => ({
    clearfix: PropTypes.bool,
    pull: PropTypes.oneOf(vars.floatPulledAlignments),
}));
export const transform = props => {
    const { className, clearfix, pull } = props, rest = tslib_1.__rest(props, ["className", "clearfix", "pull"]);
    return Object.assign({ className: classNames({
            "is-clearfix": clearfix,
            [`is-pulled-${pull}`]: pull,
        }, className) }, rest);
};
export const makeValidatingTransform = makeValidatingTransformFactory(makePropTypes, transform);
//# sourceMappingURL=float.js.map