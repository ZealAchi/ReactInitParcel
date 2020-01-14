import React from "react";
import { HelpersProps } from "../../base/helpers";
import { Prefer } from "../../types";
export declare const LEVEL_ITEM_DEFAULTS: {
    alignments: readonly ["left", "right"];
};
export interface LevelItemVariablesOverrides {
}
export interface LevelItemVariablesDefaults {
    alignments: (typeof LEVEL_ITEM_DEFAULTS["alignments"])[number];
}
export declare type LevelItemVariables = Prefer<LevelItemVariablesOverrides, LevelItemVariablesDefaults>;
export declare type LevelItemModifierProps = {
    align?: LevelItemVariables["alignments"];
};
export declare type LevelItemProps = HelpersProps & LevelItemModifierProps;
export declare const LevelItem: import("../../base/exotic").ForwardRefAsExoticComponent<LevelItemProps, React.ElementType<any>>;
