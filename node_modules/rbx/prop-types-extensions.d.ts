import PropTypes from "prop-types";
export declare const renderablePropType: PropTypes.Requireable<string | ((...args: any[]) => any) | PropTypes.InferProps<{
    render: PropTypes.Validator<(...args: any[]) => any>;
}>>;
