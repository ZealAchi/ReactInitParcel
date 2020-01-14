import React from "react";
import { HelpersProps } from "../../base/helpers";
import { Variables } from "../../base/helpers/variables";
import { Prefer } from "../../types";
export declare const ICON_DEFAULTS: {
    alignments: readonly ["left", "right"];
    sizes: readonly ["small", "medium", "large"];
};
export interface IconVariablesOverrides {
}
export interface IconVariablesDefaults {
    alignments: (typeof ICON_DEFAULTS["alignments"])[number];
    sizes: (typeof ICON_DEFAULTS["sizes"])[number];
}
export declare type IconVariables = Prefer<IconVariablesOverrides, IconVariablesDefaults>;
export declare type IconModifierProps = {
    align?: IconVariables["alignments"];
    color?: Variables["colors"];
    size?: IconVariables["sizes"];
};
export declare type IconProps = HelpersProps & IconModifierProps;
export declare const Icon: import("../../base/exotic").ForwardRefAsExoticComponent<IconProps, React.ElementType<any>>;
