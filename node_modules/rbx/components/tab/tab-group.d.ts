import React from "react";
import { HelpersProps } from "../../base/helpers";
import { Prefer } from "../../types";
export declare const TAB_GROUP_DEFAULTS: {
    alignments: readonly ["centered", "right"];
    sizes: readonly ["small", "medium", "large"];
    kinds: readonly ["boxed", "toggle", "toggle-rounded"];
};
export interface TabGroupVariablesOverrides {
}
export interface TabGroupVariablesDefaults {
    alignments: (typeof TAB_GROUP_DEFAULTS["alignments"])[number];
    sizes: (typeof TAB_GROUP_DEFAULTS["sizes"])[number];
    kinds: (typeof TAB_GROUP_DEFAULTS["kinds"])[number];
}
export declare type TabGroupVariables = Prefer<TabGroupVariablesOverrides, TabGroupVariablesDefaults>;
export declare type TabGroupModifierProps = {
    align?: TabGroupVariables["alignments"];
    fullwidth?: boolean;
    kind?: TabGroupVariables["kinds"];
    size?: TabGroupVariables["sizes"];
};
export declare type TabGroupProps = HelpersProps & TabGroupModifierProps;
export declare const TabGroup: import("../../base/exotic").ForwardRefAsExoticComponent<TabGroupProps, React.ElementType<any>>;
