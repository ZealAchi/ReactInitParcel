import PropTypes from "prop-types";
import { DEFAULTS } from "./variables";
export const makePropTypesFactory = makePropTypes => variables => makePropTypes(Object.assign({}, DEFAULTS, variables));
export const makeValidatingTransformFactory = (makePropTypesFunc, transformFunc) => (variables = DEFAULTS) => {
    const propTypes = makePropTypesFunc(variables);
    return (props, componentName, location = "prop") => {
        PropTypes.checkPropTypes(propTypes, props, location, componentName);
        return transformFunc(props);
    };
};
export const makeRootValidatingTransformFactory = (...mvtfs) => (variables) => {
    const vtfs = mvtfs.map(func => func(Object.assign({}, DEFAULTS, variables)));
    return (props, componentName, location = "prop") => vtfs.reduce((acc, vtf) => vtf(acc, componentName, location), props);
};
//# sourceMappingURL=factory.js.map