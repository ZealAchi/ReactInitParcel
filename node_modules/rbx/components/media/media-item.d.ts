import React from "react";
import { HelpersProps } from "../../base/helpers";
import { Prefer } from "../../types";
export declare const MEDIA_ITEM_DEFAULTS: {
    alignments: readonly ["content", "left", "right"];
};
export interface MediaItemVariablesOverrides {
}
export interface MediaItemVariablesDefaults {
    alignments: (typeof MEDIA_ITEM_DEFAULTS["alignments"])[number];
}
export declare type MediaItemVariables = Prefer<MediaItemVariablesOverrides, MediaItemVariablesDefaults>;
export declare type MediaItemModifierProps = {
    align?: MediaItemVariables["alignments"];
};
export declare type MediaItemProps = HelpersProps & MediaItemModifierProps;
export declare const MediaItem: import("../../base/exotic").ForwardRefAsExoticComponent<MediaItemProps, React.ElementType<any>>;
