import React from "react";
import { HelpersProps } from "../../base/helpers";
import { Prefer } from "../../types";
export declare const DROPDOWN_DEFAULTS: {
    alignments: readonly ["right"];
};
export interface DropdownVariablesOverrides {
}
export interface DropdownVariablesDefaults {
    alignments: (typeof DROPDOWN_DEFAULTS["alignments"])[number];
}
export declare type DropdownVariables = Prefer<DropdownVariablesOverrides, DropdownVariablesDefaults>;
export declare type DropdownContainerModifierProps = {
    active?: boolean;
    align?: DropdownVariables["alignments"];
    as?: React.ReactType;
    hoverable?: boolean;
    innerRef?: React.Ref<HTMLElement | SVGElement | React.ComponentType>;
    managed?: boolean;
    up?: boolean;
};
export declare type DropdownContainerProps = HelpersProps & DropdownContainerModifierProps;
declare const initialState: {
    active: boolean;
};
export declare type DropdownContainerState = typeof initialState;
export declare class DropdownContainer extends React.PureComponent<DropdownContainerProps, DropdownContainerState> {
    static displayName: string;
    readonly state: DropdownContainerState;
    private readonly ref;
    constructor(props: DropdownContainerProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private active;
    private readonly handleClick;
}
export {};
