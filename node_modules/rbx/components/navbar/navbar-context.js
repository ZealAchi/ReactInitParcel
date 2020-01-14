import React from "react";
import { noop } from "../../utils";
export const initialValue = {
    active: false,
    setActive: noop,
};
export const NavbarContext = React.createContext(initialValue);
//# sourceMappingURL=navbar-context.js.map