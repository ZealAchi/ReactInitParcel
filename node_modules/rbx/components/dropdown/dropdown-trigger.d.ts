import React from "react";
import { HelpersProps } from "../../base/helpers";
export declare type DropdownTriggerModifierProps = {
    onClick?: React.MouseEventHandler;
};
export declare type DropdownTriggerProps = HelpersProps & DropdownTriggerModifierProps;
export declare const DropdownTrigger: import("../../base/exotic").ForwardRefAsExoticComponent<DropdownTriggerProps, React.ElementType<any>>;
