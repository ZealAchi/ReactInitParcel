import React from "react";
import { HelpersProps } from "../../base/helpers";
import { Variables } from "../../base/helpers/variables";
import { Prefer } from "../../types";
export declare const PROGRESS_DEFAULTS: {
    sizes: readonly ["small", "medium", "large"];
};
export interface ProgressVariablesOverrides {
}
export interface ProgressVariablesDefaults {
    sizes: (typeof PROGRESS_DEFAULTS["sizes"])[number];
}
export declare type ProgressVariables = Prefer<ProgressVariablesOverrides, ProgressVariablesDefaults>;
export declare type ProgressModifierProps = {
    color?: Variables["colors"];
    max?: number;
    size?: ProgressVariables["sizes"];
    value?: number;
};
export declare type ProgressProps = HelpersProps & ProgressModifierProps;
export declare const Progress: import("../../base/exotic").ForwardRefAsExoticComponent<ProgressProps, React.ElementType<any>>;
