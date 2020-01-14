import * as tslib_1 from "tslib";
import PropTypes from "prop-types";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
export const Fieldset = forwardRefAs((_a, ref) => {
    var { disabled } = _a, rest = tslib_1.__rest(_a, ["disabled"]);
    return (React.createElement(Generic, Object.assign({ disabled: disabled, ref: ref }, rest)));
}, { as: "fieldset" });
Fieldset.displayName = "Fieldset";
Fieldset.propTypes = {
    disabled: PropTypes.bool,
};
//# sourceMappingURL=fieldset.js.map