import PropTypes from "prop-types";
import { TransformFunction } from "./factory";
export declare type OtherHelpersProps = {
    marginless?: boolean;
    paddingless?: boolean;
    radiusless?: boolean;
    relative?: boolean;
    shadowless?: boolean;
    unselectable?: boolean;
};
export declare const makePropTypes: (variables?: Partial<import("./variables").VariablesDefinitions> | undefined) => PropTypes.ValidationMap<any>;
export declare const transform: TransformFunction<OtherHelpersProps>;
export declare const makeValidatingTransform: import("./factory").MakeValidatingTransformFunction<OtherHelpersProps, {}>;
