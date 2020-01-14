import { Prefer } from "../../types";
import { BadgeHelpersProps } from "./badge";
import { FloatHelpersProps } from "./float";
import { OtherHelpersProps } from "./other";
import { OverflowHelpersProps } from "./overflow";
import { OverlayHelpersProps } from "./overlay";
import { ResponsiveHelpersProps } from "./responsive";
import { TooltipHelpersProps } from "./tooltip";
import { TypographyHelpersProps } from "./typography";
import { VisibilityHelpersProps } from "./visibility";
export interface HelpersPropsOverrides {
}
export declare type HelpersProps = Prefer<HelpersPropsOverrides, BadgeHelpersProps & FloatHelpersProps & OverflowHelpersProps & OverlayHelpersProps & TooltipHelpersProps & TypographyHelpersProps & VisibilityHelpersProps & OtherHelpersProps & ResponsiveHelpersProps & {
    className?: string;
}>;
export declare const makeRootValidatingTransform: (variables: Partial<import("./variables").VariablesDefinitions>) => <P extends {
    className?: string | undefined;
} & BadgeHelpersProps & FloatHelpersProps & OtherHelpersProps & OverflowHelpersProps & OverlayHelpersProps & ResponsiveHelpersProps & TooltipHelpersProps & TypographyHelpersProps & VisibilityHelpersProps>(props: P, componentName: string, location?: string) => Pick<P, Exclude<keyof P, "hidden" | "overlay" | "italic" | "relative" | "tooltip" | "badge" | "badgeColor" | "badgeOutlined" | "badgeRounded" | "badgeSize" | "clearfix" | "pull" | "marginless" | "paddingless" | "radiusless" | "shadowless" | "unselectable" | "clipped" | "responsive" | "textAlign" | "textSize" | "tooltipActive" | "tooltipColor" | "tooltipMultiline" | "tooltipPosition" | "tooltipResponsive" | "backgroundColor" | "textColor" | "textTransform" | "textWeight" | "invisible" | "srOnly">> & {
    className: string | undefined;
} & {
    "data-badge"?: string | number | undefined;
} & {
    "data-tooltip"?: string | number | undefined;
};
