import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import { makePropTypesFactory, makeValidatingTransformFactory, } from "./factory";
export const makePropTypes = makePropTypesFactory(vars => ({
    tooltip: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    tooltipActive: PropTypes.bool,
    tooltipColor: PropTypes.oneOf(vars.colors),
    tooltipMultiline: PropTypes.bool,
    tooltipPosition: PropTypes.oneOf(vars.tooltipPositions),
    tooltipResponsive: PropTypes.objectOf(PropTypes.oneOf(vars.tooltipPositions)),
}));
export const transform = props => {
    const { className, tooltip, tooltipActive, tooltipColor, tooltipMultiline, tooltipPosition, tooltipResponsive = {} } = props, rest = tslib_1.__rest(props, ["className", "tooltip", "tooltipActive", "tooltipColor", "tooltipMultiline", "tooltipPosition", "tooltipResponsive"]);
    return Object.assign({ className: classNames({
            "is-tooltip-active": tooltipActive,
            [`is-tooltip-${tooltipColor}`]: tooltipColor,
            "is-tooltip-multiline": tooltipMultiline,
            [`is-tooltip-${tooltipPosition}`]: tooltipPosition,
            tooltip,
        }, ...Object.keys(tooltipResponsive).map(breakpoint => `is-tooltip-${tooltipResponsive[breakpoint]}-${breakpoint}`), className) }, (tooltip !== undefined ? { "data-tooltip": tooltip } : {}), rest);
};
export const makeValidatingTransform = makeValidatingTransformFactory(makePropTypes, transform);
//# sourceMappingURL=tooltip.js.map