import React from "react";
import { forwardRefAs, Generic } from "../../base";
export const Checkbox = forwardRefAs((props, ref) => React.createElement(Generic, Object.assign({ ref: ref, type: "checkbox" }, props)), { as: "input" });
Checkbox.displayName = "Checkbox";
//# sourceMappingURL=checkbox.js.map