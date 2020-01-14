import React from "react";
import { HelpersProps } from "../../base/helpers";
export declare type PanelBlockModifierProps = {
    active?: boolean;
};
export declare type PanelBlockProps = HelpersProps & PanelBlockModifierProps;
export declare const PanelBlock: import("../../base/exotic").ForwardRefAsExoticComponent<PanelBlockProps, React.ElementType<any>>;
