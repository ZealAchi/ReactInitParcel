import React from "react";
import { HelpersProps } from "../../base/helpers";
export declare type ListItemModifierProps = {
    active?: boolean;
};
export declare type ListItemProps = HelpersProps & ListItemModifierProps;
export declare const ListItem: import("../../base/exotic").ForwardRefAsExoticComponent<ListItemProps, React.ElementType<any>>;
