import React from "react";
import { HelpersProps } from "../../base/helpers";
import { Prefer } from "../../types";
export declare const TAG_GROUP_DEFAULTS: {
    sizes: readonly ["medium", "large"];
};
export interface TagGroupVariablesOverrides {
}
export interface TagGroupVariablesDefaults {
    sizes: (typeof TAG_GROUP_DEFAULTS["sizes"])[number];
}
export declare type TagGroupVariables = Prefer<TagGroupVariablesOverrides, TagGroupVariablesDefaults>;
export declare type TagGroupModifierProps = {
    gapless?: boolean;
    size?: TagGroupVariables["sizes"];
};
export declare type TagGroupProps = HelpersProps & TagGroupModifierProps;
export declare const TagGroup: import("../../base/exotic").ForwardRefAsExoticComponent<TagGroupProps, React.ElementType<any>>;
