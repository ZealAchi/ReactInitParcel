import React from "react";
import { HelpersProps } from "../../base/helpers";
export declare type FieldsetModifierProps = {
    disabled?: boolean;
};
export declare type FieldsetProps = HelpersProps & FieldsetModifierProps;
export declare const Fieldset: import("../../base/exotic").ForwardRefAsExoticComponent<FieldsetProps, React.ElementType<any>>;
