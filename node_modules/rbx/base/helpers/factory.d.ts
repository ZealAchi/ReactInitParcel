import PropTypes from "prop-types";
import { UnionToIntersection } from "../../types";
import { VariablesDefinitions } from "./variables";
declare type MakePropTypesFunction = (variables?: Partial<VariablesDefinitions>) => PropTypes.ValidationMap<any>;
declare type MakePropTypesFactoryFunction = (makePropTypes: (variables: VariablesDefinitions) => PropTypes.ValidationMap<any>) => MakePropTypesFunction;
export declare const makePropTypesFactory: MakePropTypesFactoryFunction;
export declare type TransformFunction<TTransformProps extends {}, TNewProps extends {} = {}> = <P extends {
    className?: string | undefined;
} & Partial<TTransformProps>>(props: P) => Omit<P, keyof TTransformProps | "className"> & {
    className: string | undefined;
} & TNewProps;
export declare type ValidatingTransformFunction<TTransformProps extends {}, TNewProps extends {}> = <P extends {
    className?: string | undefined;
} & Partial<TTransformProps>>(props: P, componentName: string, location?: string) => ReturnType<TransformFunction<TTransformProps, TNewProps>>;
export declare type MakeValidatingTransformFunction<TTransformProps extends {}, TNewProps extends {}> = <P extends {
    className?: string | undefined;
} & Partial<TTransformProps>>(variables?: VariablesDefinitions) => (props: P, componentName: string, location?: string) => ReturnType<TransformFunction<TTransformProps, TNewProps>>;
export declare const makeValidatingTransformFactory: <TTransformProps extends {}, TNewProps extends {}>(makePropTypesFunc: MakePropTypesFunction, transformFunc: TransformFunction<TTransformProps, TNewProps>) => MakeValidatingTransformFunction<TTransformProps, TNewProps>;
export declare type ExtractTTransformProps<T extends MakeValidatingTransformFunction<any, any>> = T extends MakeValidatingTransformFunction<infer U, any> ? U : never;
export declare type ExtractTNewProps<T extends MakeValidatingTransformFunction<any, any>> = T extends MakeValidatingTransformFunction<any, infer U> ? U : never;
export declare const makeRootValidatingTransformFactory: <T extends MakeValidatingTransformFunction<any, any>[]>(...mvtfs: T) => (variables: Partial<VariablesDefinitions>) => <P extends {
    className?: string | undefined;
} & UnionToIntersection<ExtractTTransformProps<T[number]>>>(props: P, componentName: string, location?: string) => Pick<P, Exclude<keyof P, keyof UnionToIntersection<ExtractTTransformProps<T[number]>>>> & {
    className: string | undefined;
} & UnionToIntersection<ExtractTNewProps<T[number]>>;
export {};
