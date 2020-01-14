import React from "react";
import { Prefer } from "../types";
export declare type FromReactType<T extends React.ReactType> = T extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[T] extends React.DetailedHTMLFactory<React.HTMLAttributes<infer U>, infer U> ? U : JSX.IntrinsicElements[T] extends React.SVGProps<infer V> ? V : never : T;
export declare type ForwardRefAsExoticComponent<TOwnProps, TDefaultComponent extends React.ReactType> = Pick<React.ForwardRefExoticComponent<TDefaultComponent>, Exclude<keyof React.ForwardRefExoticComponent<TDefaultComponent>, "defaultProps">> & {
    <TAsComponent extends React.ReactType = TDefaultComponent>(props: Prefer<{
        as?: TAsComponent;
    } & TOwnProps, React.ComponentProps<TAsComponent>> & React.RefAttributes<TAsComponent extends keyof JSX.IntrinsicElements ? FromReactType<TAsComponent> : TAsComponent>): JSX.Element | null;
    defaultProps: {
        as: TDefaultComponent;
    } & Partial<TOwnProps & React.ComponentPropsWithoutRef<TDefaultComponent>>;
    displayName: string;
    propTypes: React.WeakValidationMap<{
        [k in "as" | keyof TOwnProps | keyof React.ComponentPropsWithoutRef<TDefaultComponent>]: any;
    }>;
};
export declare function forwardRefAs<TOwnProps, TDefaultComponent extends React.ReactType = React.ReactType>(factory: React.RefForwardingComponent<HTMLElement | SVGElement | React.ComponentType, TOwnProps & {
    as: React.ReactType;
}>, defaultProps: Partial<Prefer<React.PropsWithoutRef<TOwnProps & {
    as: TDefaultComponent;
}> & React.RefAttributes<FromReactType<TDefaultComponent>>, React.ComponentPropsWithoutRef<TDefaultComponent>>>): ForwardRefAsExoticComponent<TOwnProps, TDefaultComponent>;
