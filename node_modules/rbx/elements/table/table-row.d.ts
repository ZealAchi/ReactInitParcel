import React from "react";
import { HelpersProps } from "../../base/helpers";
export declare type TableRowHelperProps = {
    selected?: boolean;
};
export declare type TableRowProps = HelpersProps & TableRowHelperProps;
export declare const TableRow: import("../../base/exotic").ForwardRefAsExoticComponent<TableRowProps, React.ElementType<any>>;
