import { Prefer } from "../../types";
export declare type VariablesDefinitions = {
    colors: Readonly<(string | number)[]>;
    shades: Readonly<(string | number)[]>;
    badgeSizes: Readonly<(string | number)[]>;
    floatPulledAlignments: Readonly<(string | number)[]>;
    breakpoints: Readonly<(string | number)[]>;
    breakpointsLimited: Readonly<(string | number)[]>;
    tooltipPositions: Readonly<(string | number)[]>;
    textAlignments: Readonly<(string | number)[]>;
    textSizes: Readonly<(string | number)[]>;
    textTransforms: Readonly<(string | number)[]>;
    textWeights: Readonly<(string | number)[]>;
    displays: Readonly<(string | number)[]>;
};
export declare const DEFAULTS: {
    colors: readonly ["primary", "success", "info", "warning", "danger", "light", "dark", "white", "black", "link"];
    shades: readonly ["black-bis", "black-ter", "grey-darker", "grey-dark", "grey", "grey-light", "grey-lighter", "white-ter", "white-bis"];
    badgeSizes: readonly ["small", "medium", "large"];
    floatPulledAlignments: readonly ["left", "right"];
    breakpoints: readonly ["mobile", "tablet", "desktop", "widescreen", "fullhd", "touch"];
    breakpointsLimited: readonly ["mobile", "fullhd", "touch"];
    tooltipPositions: readonly ["top", "right", "bottom", "left"];
    textAlignments: readonly ["centered", "justified", "left", "right"];
    textSizes: readonly [1, 2, 3, 4, 5, 6, 7];
    textTransforms: readonly ["capitalized", "lowercase", "uppercase"];
    textWeights: readonly ["light", "medium", "normal", "semibold", "bold"];
    displays: readonly ["block", "flex", "inline", "inline-block", "inline-flex"];
};
export interface VariablesOverrides {
}
export interface VariablesDefaults {
    colors: (typeof DEFAULTS.colors)[number];
    shades: (typeof DEFAULTS.shades)[number];
    badgeSizes: (typeof DEFAULTS.badgeSizes)[number];
    floatPulledAlignments: (typeof DEFAULTS.floatPulledAlignments)[number];
    breakpoints: (typeof DEFAULTS.breakpoints)[number];
    breakpointsLimited: (typeof DEFAULTS.breakpointsLimited)[number];
    tooltipPositions: (typeof DEFAULTS.tooltipPositions)[number];
    textAlignments: (typeof DEFAULTS.textAlignments)[number];
    textSizes: (typeof DEFAULTS.textSizes)[number];
    textTransforms: (typeof DEFAULTS.textTransforms)[number];
    textWeights: (typeof DEFAULTS.textWeights)[number];
    displays: (typeof DEFAULTS.displays)[number];
}
export declare type Variables = Prefer<VariablesOverrides, VariablesDefaults>;
