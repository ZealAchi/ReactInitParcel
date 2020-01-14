import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import { makePropTypesFactory, makeValidatingTransformFactory, } from "./factory";
export const makePropTypes = makePropTypesFactory(vars => ({
    hidden: PropTypes.bool,
    invisible: PropTypes.bool,
    srOnly: PropTypes.bool,
}));
export const transform = props => {
    const { className, hidden, invisible, srOnly } = props, rest = tslib_1.__rest(props, ["className", "hidden", "invisible", "srOnly"]);
    return Object.assign({ className: classNames({
            "is-hidden": hidden,
            "is-invisible": invisible,
            "is-sr-only": srOnly,
        }, className) }, rest);
};
export const makeValidatingTransform = makeValidatingTransformFactory(makePropTypes, transform);
//# sourceMappingURL=visibility.js.map