import React from "react";
import { ModalContextValue } from "./modal-context";
export declare type ModalContainerProps = {
    active?: boolean;
    as?: React.ReactType;
    children?: React.ReactNode;
    clipped?: boolean;
    closeOnBlur?: ModalContextValue["closeOnBlur"];
    closeOnEsc?: ModalContextValue["closeOnEsc"];
    containerClassName?: string;
    document?: Document;
    innerRef?: React.Ref<HTMLElement | SVGElement | React.ComponentType>;
    onClose?: () => void;
};
export declare class ModalContainer extends React.PureComponent<ModalContainerProps> {
    static displayName: string;
    private readonly el;
    constructor(props: ModalContainerProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): false | React.ReactPortal;
    private readonly document;
}
