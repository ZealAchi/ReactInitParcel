import PropTypes from "prop-types";
import { TransformFunction } from "./factory";
export declare type VisibilityHelpersProps = {
    hidden?: boolean;
    invisible?: boolean;
    srOnly?: boolean;
};
export declare const makePropTypes: (variables?: Partial<import("./variables").VariablesDefinitions> | undefined) => PropTypes.ValidationMap<any>;
export declare const transform: TransformFunction<VisibilityHelpersProps>;
export declare const makeValidatingTransform: import("./factory").MakeValidatingTransformFunction<VisibilityHelpersProps, {}>;
