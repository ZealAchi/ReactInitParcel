import React from "react";
export interface ModalContextValue {
    closeOnBlur: boolean;
    closeOnEsc: boolean;
    close(): void;
}
export declare const initialValue: ModalContextValue;
export declare const ModalContext: React.Context<ModalContextValue>;
