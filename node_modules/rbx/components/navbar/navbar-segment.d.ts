import React from "react";
import { HelpersProps } from "../../base/helpers";
import { Prefer } from "../../types";
export declare const NAVBAR_SEGMENT_DEFAULTS: {
    alignments: readonly ["start", "end"];
};
export interface NavbarSegmentVariablesOverrides {
}
export interface NavbarSegmentVariablesDefaults {
    alignments: (typeof NAVBAR_SEGMENT_DEFAULTS["alignments"])[number];
}
export declare type NavbarSegmentVariables = Prefer<NavbarSegmentVariablesOverrides, NavbarSegmentVariablesDefaults>;
export declare type NavbarSegmentModifierProps = {
    align: NavbarSegmentVariables["alignments"];
};
export declare type NavbarSegmentProps = HelpersProps & NavbarSegmentModifierProps;
export declare const NavbarSegment: import("../../base/exotic").ForwardRefAsExoticComponent<NavbarSegmentProps, React.ElementType<any>>;
