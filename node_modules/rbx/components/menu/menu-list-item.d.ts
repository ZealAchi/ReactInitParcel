import React from "react";
import { HelpersProps } from "../../base/helpers";
export declare type MenuListItemModifierProps = {
    active?: boolean;
    menu?: React.ReactNode;
};
export declare type MenuListItemProps = HelpersProps & MenuListItemModifierProps;
export declare const MenuListItem: import("../../base/exotic").ForwardRefAsExoticComponent<MenuListItemProps, React.ElementType<any>>;
