import React from "react";
import { HelpersProps } from "../../base/helpers";
export declare type NavbarBurgerModifierProps = {
    onClick?: React.MouseEventHandler;
};
export declare type NavbarBurgerProps = HelpersProps & NavbarBurgerModifierProps;
export declare const NavbarBurger: import("../../base/exotic").ForwardRefAsExoticComponent<NavbarBurgerProps, React.ElementType<any>>;
