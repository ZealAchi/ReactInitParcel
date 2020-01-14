import React from "react";
import { HelpersProps } from "../../base/helpers";
export interface BreadcrumbItemModifierProps {
    active?: boolean;
}
export declare type BreadcrumbItemProps = HelpersProps & BreadcrumbItemModifierProps;
export declare const BreadcrumbItem: import("../../base/exotic").ForwardRefAsExoticComponent<BreadcrumbItemProps, React.ElementType<any>>;
