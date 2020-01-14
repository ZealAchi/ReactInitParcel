import React from "react";
export interface NavbarItemContextValue {
    active: boolean;
    setActive(value: boolean): void;
}
export declare const initialValue: NavbarItemContextValue;
export declare const NavbarItemContext: React.Context<NavbarItemContextValue>;
