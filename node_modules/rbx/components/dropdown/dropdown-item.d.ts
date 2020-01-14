import React from "react";
import { HelpersProps } from "../../base/helpers";
export declare type DropdownItemModifierProps = {
    active?: boolean;
    onClick?: React.MouseEventHandler;
};
export declare type DropdownItemProps = HelpersProps & DropdownItemModifierProps;
export declare const DropdownItem: import("../../base/exotic").ForwardRefAsExoticComponent<DropdownItemProps, React.ElementType<any>>;
