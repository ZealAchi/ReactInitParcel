import React from "react";
import { forwardRefAs, Generic } from "../../base";
export const Radio = forwardRefAs((props, ref) => React.createElement(Generic, Object.assign({ ref: ref, type: "radio" }, props)), { as: "input" });
Radio.displayName = "Radio";
//# sourceMappingURL=radio.js.map