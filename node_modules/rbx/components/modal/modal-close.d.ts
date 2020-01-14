import React from "react";
import { HelpersProps } from "../../base/helpers";
export declare type ModalCloseModifierProps = {
    onClick?: React.MouseEventHandler;
};
export declare type ModalCloseProps = HelpersProps & ModalCloseModifierProps;
export declare const ModalClose: import("../../base/exotic").ForwardRefAsExoticComponent<ModalCloseProps, React.ElementType<any>>;
