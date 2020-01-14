import PropTypes from "prop-types";
import { TransformFunction } from "./factory";
export declare type OverflowHelpersProps = {
    clipped?: boolean;
};
export declare const makePropTypes: (variables?: Partial<import("./variables").VariablesDefinitions> | undefined) => PropTypes.ValidationMap<any>;
export declare const transform: TransformFunction<OverflowHelpersProps>;
export declare const makeValidatingTransform: import("./factory").MakeValidatingTransformFunction<OverflowHelpersProps, {}>;
