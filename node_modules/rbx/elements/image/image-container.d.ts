import React from "react";
import { HelpersProps } from "../../base/helpers";
import { Prefer } from "../../types";
export declare const IMAGE_CONTAINER_DEFAULTS: {
    dimmensions: readonly [16, 24, 32, 48, 64, 96, 128];
    ratios: readonly ["16by9", "1by1", "1by2", "1by3", "2by1", "2by3", "3by1", "3by2", "3by4", "3by5", "4by3", "4by5", "5by3", "5by4", "9by16", "square"];
};
export interface ImageContainerVariablesOverrides {
}
export interface ImageContainerVariablesDefaults {
    sizes: (typeof IMAGE_CONTAINER_DEFAULTS["dimmensions"])[number] | (typeof IMAGE_CONTAINER_DEFAULTS["ratios"])[number];
}
export declare type ImageContainerVariables = Prefer<ImageContainerVariablesOverrides, ImageContainerVariablesDefaults>;
export declare type ImageContainerModifierProps = {
    size?: ImageContainerVariables["sizes"];
};
export declare type ImageContainerProps = HelpersProps & ImageContainerModifierProps;
export declare const ImageContainer: import("../../base/exotic").ForwardRefAsExoticComponent<ImageContainerProps, React.ElementType<any>>;
