import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import { makePropTypesFactory, makeValidatingTransformFactory, } from "./factory";
export const makeResponsiveBreakpointPropTypes = makePropTypesFactory(vars => ({
    display: PropTypes.shape({
        only: PropTypes.bool,
        value: PropTypes.oneOf(vars.displays).isRequired,
    }),
    hide: PropTypes.shape({
        only: PropTypes.bool,
        value: PropTypes.bool.isRequired,
    }),
    textAlign: PropTypes.shape({
        only: PropTypes.bool,
        value: PropTypes.oneOf(vars.textAlignments).isRequired,
    }),
    textSize: PropTypes.shape({
        only: PropTypes.bool,
        value: PropTypes.oneOf(vars.textSizes).isRequired,
    }),
}));
export const makeResponsiveBreakpointLimitedPropTypes = makePropTypesFactory(vars => ({
    display: PropTypes.shape({
        value: PropTypes.oneOf(vars.displays).isRequired,
    }),
    hide: PropTypes.shape({
        value: PropTypes.bool.isRequired,
    }),
    textAlign: PropTypes.shape({
        value: PropTypes.oneOf(vars.textAlignments).isRequired,
    }),
    textSize: PropTypes.shape({
        value: PropTypes.oneOf(vars.textSizes).isRequired,
    }),
}));
export const makePropTypes = makePropTypesFactory(vars => ({
    responsive: PropTypes.shape(vars.breakpoints
        .map(breakpoint => ({
        [breakpoint]: PropTypes.shape(vars.breakpointsLimited.indexOf(breakpoint) === -1
            ? makeResponsiveBreakpointPropTypes(vars)
            : makeResponsiveBreakpointLimitedPropTypes(vars)),
    }))
        .reduce((acc, cv) => (Object.assign({}, acc, cv)), {})),
}));
export const transform = props => {
    const { className, responsive } = props, rest = tslib_1.__rest(props, ["className", "responsive"]);
    return Object.assign({ className: classNames(responsive !== undefined
            ? Object.keys(responsive)
                .filter(breakpoint => responsive[breakpoint] !== undefined)
                .map(breakpoint => {
                const names = {};
                const { display, hide, textAlign, textSize } = responsive[breakpoint];
                if (display !== undefined) {
                    const value = display.value;
                    const only = "only" in display ? display.only === true : false;
                    names[`is-${value}-${breakpoint}${only ? "-only" : ""}`] = value;
                }
                if (hide !== undefined) {
                    const value = hide.value;
                    const only = "only" in hide ? hide.only === true : false;
                    names[`is-hidden-${breakpoint}${only ? "-only" : ""}`] = value;
                }
                if (textAlign !== undefined) {
                    const value = textAlign.value;
                    const only = "only" in textAlign ? textAlign.only === true : false;
                    names[`has-text-${value}-${breakpoint}${only ? "-only" : ""}`] = value;
                }
                if (textSize !== undefined) {
                    const value = textSize.value;
                    const only = "only" in textSize ? textSize.only === true : false;
                    names[`is-size-${value}-${breakpoint}${only ? "-only" : ""}`] = value;
                }
                return names;
            })
                .reduce((acc, cv) => (Object.assign({}, acc, cv)), {})
            : undefined, className) }, rest);
};
export const makeValidatingTransform = makeValidatingTransformFactory(makePropTypes, transform);
//# sourceMappingURL=responsive.js.map