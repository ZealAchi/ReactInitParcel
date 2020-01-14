import React from "react";
import { HelpersProps } from "../../base/helpers";
export declare type NavbarLinkModifierProps = {
    arrowless?: boolean;
    onClick?: React.MouseEventHandler;
};
export declare type NavbarLinkProps = HelpersProps & NavbarLinkModifierProps;
export declare const NavbarLink: import("../../base/exotic").ForwardRefAsExoticComponent<NavbarLinkProps, React.ElementType<any>>;
