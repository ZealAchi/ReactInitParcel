import React from "react";
import { HelpersProps } from "../../base/helpers";
import { Variables } from "../../base/helpers/variables";
import { Prefer } from "../../types";
export declare const NAVBAR_DEFAULTS: {
    fixedAlignments: readonly ["top", "bottom"];
};
export interface NavbarVariablesOverrides {
}
export interface NavbarVariablesDefaults {
    fixedAlignments: (typeof NAVBAR_DEFAULTS["fixedAlignments"])[number];
}
export declare type NavbarVariables = Prefer<NavbarVariablesOverrides, NavbarVariablesDefaults>;
export declare type NavbarContainerModifierProps = {
    active?: boolean;
    as?: React.ReactType;
    color?: Variables["colors"];
    document?: Document;
    fixed?: NavbarVariables["fixedAlignments"];
    innerRef?: React.Ref<HTMLElement | SVGElement | React.ComponentType>;
    managed?: boolean;
    transparent?: boolean;
};
export declare type NavbarContainerProps = HelpersProps & NavbarContainerModifierProps;
export interface NavbarContainerState {
    active: boolean;
}
export declare class NavbarContainer extends React.PureComponent<NavbarContainerProps, NavbarContainerState> {
    static defaultProps: {
        transparent: boolean;
    };
    static displayName: string;
    readonly state: NavbarContainerState;
    constructor(props: NavbarContainerProps);
    componentWillUnmount(): void;
    render(): JSX.Element;
    private active;
    private readonly document;
    private manageHtmlAttributes;
}
