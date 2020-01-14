import PropTypes from "prop-types";
import { TransformFunction } from "./factory";
import { Variables } from "./variables";
export declare type TypographyHelpersProps = {
    backgroundColor?: Variables["colors"] | Variables["shades"];
    italic?: boolean;
    textAlign?: Variables["textAlignments"];
    textColor?: Variables["colors"] | Variables["shades"];
    textSize?: Variables["textSizes"];
    textTransform?: Variables["textTransforms"];
    textWeight?: Variables["textWeights"];
};
export declare const makePropTypes: (variables?: Partial<import("./variables").VariablesDefinitions> | undefined) => PropTypes.ValidationMap<any>;
export declare const transform: TransformFunction<TypographyHelpersProps>;
export declare const makeValidatingTransform: import("./factory").MakeValidatingTransformFunction<TypographyHelpersProps, {}>;
