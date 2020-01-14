import PropTypes from "prop-types";
import { TransformFunction } from "./factory";
import { Variables } from "./variables";
export declare type FloatHelpersProps = {
    clearfix?: boolean;
    pull?: Variables["floatPulledAlignments"];
};
export declare const makePropTypes: (variables?: Partial<import("./variables").VariablesDefinitions> | undefined) => PropTypes.ValidationMap<any>;
export declare const transform: TransformFunction<FloatHelpersProps>;
export declare const makeValidatingTransform: import("./factory").MakeValidatingTransformFunction<FloatHelpersProps, {}>;
