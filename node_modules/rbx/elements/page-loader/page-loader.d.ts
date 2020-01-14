import React from "react";
import { HelpersProps } from "../../base/helpers";
import { Variables } from "../../base/helpers/variables";
export declare const PAGE_LOADER_DEFAULTS: {
    directions: readonly ["right-to-left", "left-to-right"];
};
export declare type PageLoaderModifierProps = {
    active?: boolean;
    color?: Variables["colors"];
    direction?: (typeof PAGE_LOADER_DEFAULTS["directions"])[number];
};
export declare type PageLoaderProps = HelpersProps & PageLoaderModifierProps;
export declare const PageLoader: import("../../base/exotic").ForwardRefAsExoticComponent<PageLoaderProps, React.ElementType<any>>;
