import React from "react";
import { HelpersProps } from "../../base/helpers";
import { Variables } from "../../base/helpers/variables";
import { Prefer } from "../../types";
export declare const INPUT_DEFAULTS: {
    sizes: readonly ["small", "medium", "large"];
    states: readonly ["focused", "hovered"];
    types: readonly ["text", "email", "tel", "password", "number", "search", "color", "date", "time"];
};
export interface InputVariablesOverrides {
}
export interface InputVariablesDefaults {
    sizes: (typeof INPUT_DEFAULTS["sizes"])[number];
    states: (typeof INPUT_DEFAULTS["states"])[number];
    types: (typeof INPUT_DEFAULTS["types"])[number];
}
export declare type InputVariables = Prefer<InputVariablesOverrides, InputVariablesDefaults>;
export declare type InputModifierProps = {
    color?: Variables["colors"];
    readOnly?: React.InputHTMLAttributes<HTMLInputElement>["readOnly"];
    rounded?: boolean;
    size?: InputVariables["sizes"];
    state?: InputVariables["states"];
    static?: boolean;
    type?: InputVariables["types"];
};
export declare type InputProps = HelpersProps & InputModifierProps;
export declare const Input: import("../../base/exotic").ForwardRefAsExoticComponent<InputProps, React.ElementType<any>>;
