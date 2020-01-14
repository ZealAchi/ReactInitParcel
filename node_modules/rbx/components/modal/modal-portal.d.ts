import React from "react";
import { ModalContextValue } from "./modal-context";
export declare type ModalPortalModifierProps = {
    as?: React.ReactType;
    className?: string;
    clipped?: boolean;
    closeOnBlur?: ModalContextValue["closeOnBlur"];
    closeOnEsc?: ModalContextValue["closeOnEsc"];
    document: Document;
    innerRef?: React.Ref<HTMLElement | SVGElement | React.ComponentType>;
    onClose?: ModalContextValue["close"];
};
export declare type ModalPortalProps = ModalPortalModifierProps;
export declare class ModalPortal extends React.PureComponent<ModalPortalProps> {
    static defaultProps: {
        closeOnBlur: boolean;
        closeOnEsc: boolean;
    };
    static displayName: string;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private readonly close;
    private readonly handleKeydown;
}
