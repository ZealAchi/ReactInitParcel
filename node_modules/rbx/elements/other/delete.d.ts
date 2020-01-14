import React from "react";
import { HelpersProps } from "../../base/helpers";
import { Prefer } from "../../types";
export declare const DELETE_DEFAULTS: {
    sizes: readonly ["small", "medium", "large"];
};
export interface DeleteVariablesOverrides {
}
export interface DeleteVariablesDefaults {
    sizes: (typeof DELETE_DEFAULTS["sizes"])[number];
}
export declare type DeleteVariables = Prefer<DeleteVariablesOverrides, DeleteVariablesDefaults>;
export declare type DeleteModifierProps = {
    size?: DeleteVariables["sizes"];
};
export declare type DeleteProps = HelpersProps & DeleteModifierProps;
export declare const Delete: import("../../base/exotic").ForwardRefAsExoticComponent<DeleteProps, React.ElementType<any>>;
