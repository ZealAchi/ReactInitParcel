import React from "react";
import { HelpersProps } from "../../base/helpers";
import { Prefer } from "../../types";
export declare const FIELD_LABEL_DEFAULTS: {
    sizes: readonly ["small", "normal", "medium", "large"];
};
export interface FieldLabelVariablesOverrides {
}
export interface FieldLabelVariablesDefaults {
    sizes: (typeof FIELD_LABEL_DEFAULTS["sizes"])[number];
}
export declare type FieldLabelVariables = Prefer<FieldLabelVariablesOverrides, FieldLabelVariablesDefaults>;
export declare type FieldLabelModifierProps = {
    size?: FieldLabelVariables["sizes"];
};
export declare type FieldLabelProps = HelpersProps & FieldLabelModifierProps;
export declare const FieldLabel: import("../../base/exotic").ForwardRefAsExoticComponent<FieldLabelProps, React.ElementType<any>>;
