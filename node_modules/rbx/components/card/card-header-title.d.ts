import React from "react";
import { HelpersProps } from "../../base/helpers";
import { Prefer } from "../../types";
export declare const CARD_HEADER_TITLE_DEFAULTS: {
    alignments: readonly ["centered"];
};
export interface CardHeaderTitleVariablesOverrides {
}
export interface CardHeaderTitleVariablesDefaults {
    alignments: (typeof CARD_HEADER_TITLE_DEFAULTS["alignments"])[number];
}
export declare type CardHeaderTitleVariables = Prefer<CardHeaderTitleVariablesOverrides, CardHeaderTitleVariablesDefaults>;
export declare type CardHeaderTitleModifierProps = {
    align?: CardHeaderTitleVariables["alignments"];
};
export declare type CardHeaderTitleProps = HelpersProps & CardHeaderTitleModifierProps;
export declare const CardHeaderTitle: import("../../base/exotic").ForwardRefAsExoticComponent<CardHeaderTitleProps, React.ElementType<any>>;
