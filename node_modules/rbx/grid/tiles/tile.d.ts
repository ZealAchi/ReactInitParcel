import React from "react";
import { HelpersProps } from "../../base/helpers";
import { Prefer } from "../../types";
export declare const TILE_DEFAULTS: {
    kinds: readonly ["ancestor", "parent", "child"];
    sizes: readonly [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
};
export interface TileVariablesOverrides {
}
export interface TileVariablesDefaults {
    kinds: (typeof TILE_DEFAULTS["kinds"])[number];
    sizes: (typeof TILE_DEFAULTS["sizes"])[number];
}
export declare type TileVariables = Prefer<TileVariablesOverrides, TileVariablesDefaults>;
export declare type TileModifierProps = {
    kind?: TileVariables["kinds"];
    size?: TileVariables["sizes"];
    vertical?: boolean;
};
export declare type TileProps = HelpersProps & TileModifierProps;
export declare const Tile: import("../../base/exotic").ForwardRefAsExoticComponent<TileProps, React.ElementType<any>>;
