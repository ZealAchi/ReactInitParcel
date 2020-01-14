import React from "react";
import { forwardRefAs, Generic } from "../../base";
export const TableCell = forwardRefAs((props, ref) => React.createElement(Generic, Object.assign({ ref: ref }, props)), { as: "td" });
TableCell.displayName = "Table.Cell";
//# sourceMappingURL=table-cell.js.map