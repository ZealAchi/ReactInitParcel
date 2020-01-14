import PropTypes from "prop-types";
import { TransformFunction } from "./factory";
import { DEFAULTS, Variables } from "./variables";
export declare type BadgeHelpersProps = {
    badge?: number | string;
    badgeColor?: Variables["colors"];
    badgeOutlined?: boolean;
    badgeRounded?: boolean;
    badgeSize?: (typeof DEFAULTS["badgeSizes"])[number];
};
export declare const makePropTypes: (variables?: Partial<import("./variables").VariablesDefinitions> | undefined) => PropTypes.ValidationMap<any>;
export declare const transform: TransformFunction<BadgeHelpersProps, {
    "data-badge"?: string | number;
}>;
export declare const makeValidatingTransform: import("./factory").MakeValidatingTransformFunction<BadgeHelpersProps, {
    "data-badge"?: string | number | undefined;
}>;
