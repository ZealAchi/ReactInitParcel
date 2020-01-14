import React from "react";
import { HelpersProps } from "../../base/helpers";
import { Prefer } from "../../types";
export declare const SECTION_DEFAULTS: {
    sizes: readonly ["medium", "large"];
};
export interface SectionVariablesOverrides {
}
export interface SectionVariablesDefaults {
    sizes: (typeof SECTION_DEFAULTS["sizes"])[number];
}
export declare type SectionVariables = Prefer<SectionVariablesOverrides, SectionVariablesDefaults>;
export declare type SectionModifierProps = {
    size?: SectionVariables["sizes"];
};
export declare type SectionProps = HelpersProps & SectionModifierProps;
export declare const Section: import("../../base/exotic").ForwardRefAsExoticComponent<SectionProps, React.ElementType<any>>;
