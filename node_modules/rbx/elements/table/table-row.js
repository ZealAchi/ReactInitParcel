import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
export const TableRow = forwardRefAs((_a, ref) => {
    var { className, selected } = _a, rest = tslib_1.__rest(_a, ["className", "selected"]);
    return (React.createElement(Generic, Object.assign({ className: classNames({ "is-selected": selected }, className), ref: ref }, rest)));
}, { as: "tr" });
TableRow.displayName = "Table.Row";
TableRow.propTypes = {
    selected: PropTypes.bool,
};
//# sourceMappingURL=table-row.js.map