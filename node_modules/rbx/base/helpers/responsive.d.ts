import PropTypes from "prop-types";
import { TransformFunction } from "./factory";
import { Variables } from "./variables";
export declare type LimitedResponsiveBreakpointProps = {
    display?: {
        value: Variables["displays"];
    };
    hide?: {
        value: boolean;
    };
    textAlign?: {
        value: Variables["textAlignments"];
    };
    textSize?: {
        value: Variables["textSizes"];
    };
};
export declare type ResponsiveBreakpointProps = {
    display?: {
        only?: boolean;
        value: Variables["displays"];
    };
    hide?: {
        only?: boolean;
        value: boolean;
    };
    textAlign?: {
        only?: boolean;
        value: Variables["textAlignments"];
    };
    textSize?: {
        only?: boolean;
        value: Variables["textSizes"];
    };
};
export declare type ResponsiveHelpersProps = {
    responsive?: {
        [B in Variables["breakpointsLimited"]]?: LimitedResponsiveBreakpointProps;
    } & {
        [B in Exclude<Variables["breakpoints"], Variables["breakpointsLimited"]>]?: ResponsiveBreakpointProps;
    };
};
export declare const makeResponsiveBreakpointPropTypes: (variables?: Partial<import("./variables").VariablesDefinitions> | undefined) => PropTypes.ValidationMap<any>;
export declare const makeResponsiveBreakpointLimitedPropTypes: (variables?: Partial<import("./variables").VariablesDefinitions> | undefined) => PropTypes.ValidationMap<any>;
export declare const makePropTypes: (variables?: Partial<import("./variables").VariablesDefinitions> | undefined) => PropTypes.ValidationMap<any>;
export declare const transform: TransformFunction<ResponsiveHelpersProps>;
export declare const makeValidatingTransform: import("./factory").MakeValidatingTransformFunction<ResponsiveHelpersProps, {}>;
