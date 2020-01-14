import React from "react";
import { HelpersProps } from "../../base/helpers";
import { Prefer } from "../../types";
export declare const PAGINATION_STEP_DEFAULTS: {
    alignments: readonly ["next", "previous"];
};
export interface PaginationStepVariablesOverrides {
}
export interface PaginationStepVariablesDefaults {
    alignments: (typeof PAGINATION_STEP_DEFAULTS["alignments"])[number];
}
export declare type PaginationStepVariables = Prefer<PaginationStepVariablesOverrides, PaginationStepVariablesDefaults>;
export declare type PaginationStepModifierProps = {
    align: PaginationStepVariables["alignments"];
};
export declare type PaginationStepProps = HelpersProps & PaginationStepModifierProps;
export declare const PaginationStep: import("../../base/exotic").ForwardRefAsExoticComponent<PaginationStepProps, React.ElementType<any>>;
