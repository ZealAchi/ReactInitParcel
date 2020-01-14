import React from "react";
import { HelpersProps } from "../../base/helpers";
import { Prefer } from "../../types";
export declare const TITLE_DEFAULTS: {
    sizes: readonly [1, 2, 3, 4, 5, 6];
};
export interface TitleVariablesOverrides {
}
export interface TitleVariablesDefaults {
    sizes: (typeof TITLE_DEFAULTS["sizes"])[number];
}
export declare type TitleVariables = Prefer<TitleVariablesOverrides, TitleVariablesDefaults>;
export declare type TitleModifierProps = {
    size?: TitleVariables["sizes"];
    spaced?: boolean;
    subtitle?: boolean;
};
export declare type TitleProps = HelpersProps & TitleModifierProps;
export declare const Title: import("../../base/exotic").ForwardRefAsExoticComponent<TitleProps, React.ElementType<any>>;
