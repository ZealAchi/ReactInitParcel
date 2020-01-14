import React from "react";
import { noop } from "../../utils";
export const initialValue = {
    active: false,
    setActive: noop,
};
export const NavbarItemContext = React.createContext(initialValue);
//# sourceMappingURL=navbar-item-context.js.map