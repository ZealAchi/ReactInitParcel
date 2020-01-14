import React from "react";
import { HelpersProps } from "../../base/helpers";
import { Prefer } from "../../types";
export declare const LABEL_DEFAULTS: {
    sizes: readonly ["small", "medium", "large"];
};
export interface LabelVariablesOverrides {
}
export interface LabelVariablesDefaults {
    sizes: (typeof LABEL_DEFAULTS["sizes"])[number];
}
export declare type LabelVariables = Prefer<LabelVariablesOverrides, LabelVariablesDefaults>;
export declare type LabelModifierProps = {
    disabled?: boolean;
    size?: LabelVariables["sizes"];
};
export declare type LabelProps = HelpersProps & LabelModifierProps;
export declare const Label: import("../../base/exotic").ForwardRefAsExoticComponent<LabelProps, React.ElementType<any>>;
