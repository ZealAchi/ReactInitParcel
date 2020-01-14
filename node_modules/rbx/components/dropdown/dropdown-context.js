import React from "react";
import { noop } from "../../utils";
export const initialValue = {
    active: false,
    setActive: noop,
};
export const DropdownContext = React.createContext(initialValue);
//# sourceMappingURL=dropdown-context.js.map