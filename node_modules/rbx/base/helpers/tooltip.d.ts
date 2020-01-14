import PropTypes from "prop-types";
import { TransformFunction } from "./factory";
import { DEFAULTS, Variables } from "./variables";
export declare type TooltipHelpersProps = {
    tooltip?: number | string;
    tooltipActive?: boolean;
    tooltipColor?: Variables["colors"];
    tooltipMultiline?: boolean;
    tooltipPosition?: (typeof DEFAULTS["tooltipPositions"])[number];
    tooltipResponsive?: {
        [K in Variables["breakpoints"]]?: (typeof DEFAULTS["tooltipPositions"])[number];
    };
};
export declare const makePropTypes: (variables?: Partial<import("./variables").VariablesDefinitions> | undefined) => PropTypes.ValidationMap<any>;
export declare const transform: TransformFunction<TooltipHelpersProps, {
    "data-tooltip"?: string | number;
}>;
export declare const makeValidatingTransform: import("./factory").MakeValidatingTransformFunction<TooltipHelpersProps, {
    "data-tooltip"?: string | number | undefined;
}>;
