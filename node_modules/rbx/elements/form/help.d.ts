import React from "react";
import { HelpersProps } from "../../base/helpers";
import { Variables } from "../../base/helpers/variables";
export declare type HelpModifierProps = {
    color?: Variables["colors"];
};
export declare type HelpProps = HelpersProps & HelpModifierProps;
export declare const Help: import("../../base/exotic").ForwardRefAsExoticComponent<HelpProps, React.ElementType<any>>;
