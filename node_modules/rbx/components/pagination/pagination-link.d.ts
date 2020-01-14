import React from "react";
import { HelpersProps } from "../../base/helpers";
export declare type PaginationLinkModifiers = {
    current?: boolean;
};
export declare type PaginationLinkProps = HelpersProps & PaginationLinkModifiers;
export declare const PaginationLink: import("../../base/exotic").ForwardRefAsExoticComponent<PaginationLinkProps, React.ElementType<any>>;
