import PropTypes from "prop-types";
import { TransformFunction } from "./factory";
export declare type OverlayHelpersProps = {
    overlay?: boolean;
};
export declare const makePropTypes: (variables?: Partial<import("./variables").VariablesDefinitions> | undefined) => PropTypes.ValidationMap<any>;
export declare const transform: TransformFunction<OverlayHelpersProps>;
export declare const makeValidatingTransform: import("./factory").MakeValidatingTransformFunction<OverlayHelpersProps, {}>;
