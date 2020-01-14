import React from "react";
import { HelpersProps } from "../../base/helpers";
import { Prefer } from "../../types";
export declare const BUTTON_GROUP_DEFAULTS: {
    alignments: readonly ["centered", "right"];
    sizes: readonly ["small", "medium", "large"];
};
export interface ButtonGroupVariablesOverrides {
}
export interface ButtonGroupVariablesDefaults {
    alignments: (typeof BUTTON_GROUP_DEFAULTS["alignments"])[number];
    sizes: (typeof BUTTON_GROUP_DEFAULTS["sizes"])[number];
}
export declare type ButtonGroupVariables = Prefer<ButtonGroupVariablesOverrides, ButtonGroupVariablesDefaults>;
export declare type ButtonGroupModifierProps = {
    align?: ButtonGroupVariables["alignments"];
    hasAddons?: boolean;
    size?: ButtonGroupVariables["sizes"];
};
export declare type ButtonGroupProps = HelpersProps & ButtonGroupModifierProps;
export declare const ButtonGroup: import("../../base/exotic").ForwardRefAsExoticComponent<ButtonGroupProps, React.ElementType<any>>;
