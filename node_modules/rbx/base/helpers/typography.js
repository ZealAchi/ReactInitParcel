import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import { makePropTypesFactory, makeValidatingTransformFactory, } from "./factory";
export const makePropTypes = makePropTypesFactory(vars => ({
    backgroundColor: PropTypes.oneOf([...vars.colors, ...vars.shades]),
    italic: PropTypes.bool,
    textAlign: PropTypes.oneOf(vars.textAlignments),
    textColor: PropTypes.oneOf([...vars.colors, ...vars.shades]),
    textSize: PropTypes.oneOf(vars.textSizes),
    textTransform: PropTypes.oneOf(vars.textTransforms),
    textWeight: PropTypes.oneOf(vars.textWeights),
}));
export const transform = props => {
    const { backgroundColor, className, italic, textAlign, textColor, textSize, textTransform, textWeight } = props, rest = tslib_1.__rest(props, ["backgroundColor", "className", "italic", "textAlign", "textColor", "textSize", "textTransform", "textWeight"]);
    return Object.assign({ className: classNames({
            [`has-background-${backgroundColor}`]: backgroundColor,
            [`has-text-${textColor}`]: textColor,
            "is-italic": italic,
            [`is-${textTransform}`]: textTransform,
            [`has-text-${textAlign}`]: textAlign,
            [`has-text-weight-${textWeight}`]: textWeight,
            [`is-size-${textSize}`]: textSize,
        }, className) }, rest);
};
export const makeValidatingTransform = makeValidatingTransformFactory(makePropTypes, transform);
//# sourceMappingURL=typography.js.map