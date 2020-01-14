import React from "react";
export function forwardRefAs(factory, defaultProps) {
    const forward = React.forwardRef(factory);
    forward.defaultProps = defaultProps;
    return forward;
}
//# sourceMappingURL=exotic.js.map