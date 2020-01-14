import React from "react";
import { makeRootValidatingTransform } from "./helpers";
import { DEFAULTS } from "./helpers/variables";
export const initialValue = {
    transform: makeRootValidatingTransform(DEFAULTS),
};
export const ThemeContext = React.createContext(initialValue);
//# sourceMappingURL=theme.js.map