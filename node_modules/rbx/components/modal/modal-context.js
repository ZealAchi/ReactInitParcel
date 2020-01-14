import React from "react";
import { noop } from "../../utils";
export const initialValue = {
    close: noop,
    closeOnBlur: false,
    closeOnEsc: true,
};
export const ModalContext = React.createContext(initialValue);
//# sourceMappingURL=modal-context.js.map