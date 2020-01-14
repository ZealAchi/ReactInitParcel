import React from "react";
export interface NavbarContextValue {
    active: boolean;
    setActive(value: boolean): void;
}
export declare const initialValue: NavbarContextValue;
export declare const NavbarContext: React.Context<NavbarContextValue>;
