import React from "react";
import { HelpersProps } from "./helpers";
import { ValidatingTransformFunction } from "./helpers/factory";
export interface ThemeContextValue<TTransformProps extends {} = HelpersProps, TNewProps extends {} = {}> {
    transform: ValidatingTransformFunction<TTransformProps, TNewProps>;
}
export declare const initialValue: ThemeContextValue;
export declare const ThemeContext: React.Context<ThemeContextValue<import("../types").Prefer<import("./helpers").HelpersPropsOverrides, import("./helpers/badge").BadgeHelpersProps & import("./helpers/float").FloatHelpersProps & import("./helpers/overflow").OverflowHelpersProps & import("./helpers/overlay").OverlayHelpersProps & import("./helpers/tooltip").TooltipHelpersProps & import("./helpers/typography").TypographyHelpersProps & import("./helpers/visibility").VisibilityHelpersProps & import("./helpers/other").OtherHelpersProps & import("./helpers/responsive").ResponsiveHelpersProps & {
    className?: string | undefined;
}>, {}>>;
