import React from "react";
import { HelpersProps } from "../../base/helpers";
import { Variables } from "../../base/helpers/variables";
import { Prefer } from "../../types";
export declare const TEXTAREA_DEFAULTS: {
    sizes: readonly ["small", "medium", "large"];
    states: readonly ["focused", "hovered"];
};
export interface TextareaVariablesOverrides {
}
export interface TextareaVariablesDefaults {
    sizes: (typeof TEXTAREA_DEFAULTS["sizes"])[number];
    states: (typeof TEXTAREA_DEFAULTS["states"])[number];
}
export declare type TextareaVariables = Prefer<TextareaVariablesOverrides, TextareaVariablesDefaults>;
export declare type TextareaModifierProps = {
    color?: Variables["colors"];
    fixedSize?: boolean;
    size?: TextareaVariables["sizes"];
    state?: TextareaVariables["states"];
};
export declare type TextareaProps = HelpersProps & TextareaModifierProps;
export declare const Textarea: import("../../base/exotic").ForwardRefAsExoticComponent<TextareaProps, React.ElementType<any>>;
