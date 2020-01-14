import React from "react";
import { HelpersProps } from "../../base/helpers";
import { Prefer } from "../../types";
export declare const NAVBAR_DROPDOWN_DEFAULTS: {
    alignments: readonly ["right"];
};
export interface NavbarDropdownVariablesOverrides {
}
export interface NavbarDropdownVariablesDefaults {
    alignments: (typeof NAVBAR_DROPDOWN_DEFAULTS["alignments"])[number];
}
export declare type NavbarDropdownVariables = Prefer<NavbarDropdownVariablesOverrides, NavbarDropdownVariablesDefaults>;
export declare type NavbarDropdownModifierProps = {
    align?: NavbarDropdownVariables["alignments"];
    boxed?: boolean;
};
export declare type NavbarDropdownProps = HelpersProps & NavbarDropdownModifierProps;
export declare const NavbarDropdown: import("../../base/exotic").ForwardRefAsExoticComponent<NavbarDropdownProps, React.ElementType<any>>;
