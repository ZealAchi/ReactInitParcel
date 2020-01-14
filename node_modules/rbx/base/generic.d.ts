import React from "react";
import { HelpersProps } from "./helpers";
export declare type GenericProps = HelpersProps;
export declare const Generic: import("./exotic").ForwardRefAsExoticComponent<import("../types").Prefer<import("./helpers").HelpersPropsOverrides, import("./helpers/badge").BadgeHelpersProps & import("./helpers/float").FloatHelpersProps & import("./helpers/overflow").OverflowHelpersProps & import("./helpers/overlay").OverlayHelpersProps & import("./helpers/tooltip").TooltipHelpersProps & import("./helpers/typography").TypographyHelpersProps & import("./helpers/visibility").VisibilityHelpersProps & import("./helpers/other").OtherHelpersProps & import("./helpers/responsive").ResponsiveHelpersProps & {
    className?: string | undefined;
}>, React.ElementType<any>>;
