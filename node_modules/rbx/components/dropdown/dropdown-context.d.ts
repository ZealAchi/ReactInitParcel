import React from "react";
export interface DropdownContextValue {
    active: boolean;
    setActive(value: boolean): void;
}
export declare const initialValue: DropdownContextValue;
export declare const DropdownContext: React.Context<DropdownContextValue>;
