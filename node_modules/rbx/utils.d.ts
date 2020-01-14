import React from "react";
export declare const canUseDOM: () => boolean;
export declare const combineRefs: <T>(...refs: (((instance: T | null) => void) | React.RefObject<T> | null | undefined)[]) => (instance: T | null) => void;
export declare const noop: () => void;
