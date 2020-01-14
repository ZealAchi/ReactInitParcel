import React from "react";
import { HelpersProps } from "../../base/helpers";
import { Variables } from "../../base/helpers/variables";
export declare type DividerModifierProps = {
    children?: string | number;
    color?: Variables["colors"];
    vertical?: boolean;
};
export declare type DividerProps = HelpersProps & DividerModifierProps;
export declare const Divider: import("../../base/exotic").ForwardRefAsExoticComponent<DividerProps, React.ElementType<any>>;
