import React from "react";
import { HelpersProps } from "../../base/helpers";
export declare type NavbarItemContainerModifierProps = {
    active?: boolean;
    as?: React.ReactType;
    dropdown?: boolean;
    expanded?: boolean;
    hoverable?: boolean;
    innerRef?: React.Ref<HTMLElement | SVGElement | React.ComponentType>;
    managed?: boolean;
    onClick?: React.MouseEventHandler;
    tab?: boolean;
    up?: boolean;
};
export declare type NavbarItemContainerProps = HelpersProps & NavbarItemContainerModifierProps;
export interface NavbarItemContainerState {
    active: boolean;
}
export declare class NavbarItemContainer extends React.PureComponent<NavbarItemContainerProps, NavbarItemContainerState> {
    static displayName: string;
    readonly state: NavbarItemContainerState;
    private readonly ref;
    constructor(props: NavbarItemContainerProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private active;
    private readonly handleDocumentClick;
    private readonly handleOnClick;
}
