import React from "react";
import { HelpersProps } from "../../base/helpers";
import { Prefer } from "../../types";
export declare const CONTROL_DEFAULTS: {
    sizes: readonly ["small", "medium", "large"];
};
export interface ControlVariablesOverrides {
}
export interface ControlVariablesDefaults {
    sizes: (typeof CONTROL_DEFAULTS["sizes"])[number];
}
export declare type ControlVariables = Prefer<ControlVariablesOverrides, ControlVariablesDefaults>;
export declare type ControlModifierProps = {
    expanded?: boolean;
    iconLeft?: boolean;
    iconRight?: boolean;
    loading?: boolean;
    size?: ControlVariables["sizes"];
};
export declare type ControlProps = HelpersProps & ControlModifierProps;
export declare const Control: import("../../base/exotic").ForwardRefAsExoticComponent<ControlProps, React.ElementType<any>>;
