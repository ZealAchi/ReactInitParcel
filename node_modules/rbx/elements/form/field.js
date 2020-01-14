import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
import { FieldBody } from "./field-body";
import { FieldLabel } from "./field-label";
export const FIELD_DEFAULTS = {
    alignments: ["centered", "right"],
    kinds: ["addons", "group"],
};
export const Field = Object.assign(forwardRefAs((props, ref) => {
    const { align, expanded, horizontal, kind, multiline, narrow } = props, rest = tslib_1.__rest(props, ["align", "expanded", "horizontal", "kind", "multiline", "narrow"]);
    let k;
    if (kind === "addons") {
        k = "has-addons";
    }
    else if (kind === "group") {
        k = "is-grouped";
    }
    rest.className = classNames("field", {
        [`${k}`]: k,
        [`${k}-${align}`]: k !== undefined && align !== undefined,
        [`${k}-multiline`]: k === "is-grouped" && multiline === true,
        "is-expanded": expanded,
        "is-horizontal": horizontal,
        "is-narrow": narrow,
    }, rest.className);
    return React.createElement(Generic, Object.assign({ ref: ref }, rest));
}, { as: "div" }), {
    Body: FieldBody,
    Label: FieldLabel,
});
Field.displayName = "Field";
Field.propTypes = {
    align: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    expanded: PropTypes.bool,
    horizontal: PropTypes.bool,
    kind: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    multiline: PropTypes.bool,
    narrow: PropTypes.bool,
};
//# sourceMappingURL=field.js.map