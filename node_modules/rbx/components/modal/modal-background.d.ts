import React from "react";
import { HelpersProps } from "../../base/helpers";
export declare type ModalBackgroundModifierProps = {
    onClick?: React.MouseEventHandler;
};
export declare type ModalBackgroundProps = HelpersProps & ModalBackgroundModifierProps;
export declare const ModalBackground: import("../../base/exotic").ForwardRefAsExoticComponent<ModalBackgroundProps, React.ElementType<any>>;
