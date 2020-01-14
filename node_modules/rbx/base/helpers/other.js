import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import { makePropTypesFactory, makeValidatingTransformFactory, } from "./factory";
export const makePropTypes = makePropTypesFactory(vars => ({
    marginless: PropTypes.bool,
    paddingless: PropTypes.bool,
    radiusless: PropTypes.bool,
    relative: PropTypes.bool,
    shadowless: PropTypes.bool,
    unselectable: PropTypes.bool,
}));
export const transform = props => {
    const { className, marginless, paddingless, radiusless, relative, shadowless, unselectable } = props, rest = tslib_1.__rest(props, ["className", "marginless", "paddingless", "radiusless", "relative", "shadowless", "unselectable"]);
    return Object.assign({ className: classNames({
            "is-marginless": marginless,
            "is-paddingless": paddingless,
            "is-radiusless": radiusless,
            "is-relative": relative,
            "is-shadowless": shadowless,
            "is-unselectable": unselectable,
        }, className) }, rest);
};
export const makeValidatingTransform = makeValidatingTransformFactory(makePropTypes, transform);
//# sourceMappingURL=other.js.map