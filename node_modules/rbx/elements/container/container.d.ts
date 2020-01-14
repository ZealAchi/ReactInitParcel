import React from "react";
import { HelpersProps } from "../../base/helpers";
import { Variables } from "../../base/helpers/variables";
export declare type ContainerModifierProps = {
    breakpoint?: Variables["breakpoints"];
    fluid?: boolean;
};
export declare type ContainerProps = HelpersProps & ContainerModifierProps;
export declare const Container: import("../../base/exotic").ForwardRefAsExoticComponent<ContainerProps, React.ElementType<any>>;
