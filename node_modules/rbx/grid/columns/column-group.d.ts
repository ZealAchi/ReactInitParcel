import React from "react";
import { HelpersProps } from "../../base/helpers";
import { Variables } from "../../base/helpers/variables";
import { Prefer } from "../../types";
export declare const COLUMN_GROUP_DEFAULTS: {
    gapSizes: readonly [0, 1, 2, 3, 4, 5, 6, 7, 8];
};
export interface ColumnGroupVariablesOverrides {
}
export interface ColumnGroupVariablesDefaults {
    gapSizes: (typeof COLUMN_GROUP_DEFAULTS["gapSizes"])[number];
}
export declare type ColumnGroupVariables = Prefer<ColumnGroupVariablesOverrides, ColumnGroupVariablesDefaults>;
export declare type ColumnGroupBreakpointOptions = {
    gapSize?: ColumnGroupVariables["gapSizes"];
};
declare type ColumnGroupModifierProps = {
    [B in Variables["breakpoints"]]?: ColumnGroupBreakpointOptions;
} & {
    breakpoint?: Variables["breakpoints"];
    centered?: boolean;
    gapless?: boolean;
    multiline?: boolean;
    vcentered?: boolean;
} & ColumnGroupBreakpointOptions;
export declare type ColumnGroupProps = HelpersProps & ColumnGroupModifierProps;
export declare const ColumnGroup: import("../../base/exotic").ForwardRefAsExoticComponent<ColumnGroupProps, React.ElementType<any>>;
export {};
