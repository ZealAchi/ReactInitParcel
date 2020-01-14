import * as tslib_1 from "tslib";
import classNames from "classnames";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
import { Delete } from "../../elements";
import { ModalContext } from "./modal-context";
const mapChildren = (children, close) => React.Children.map(children, (child, i) => {
    if (typeof child === "object" && child !== null && "type" in child) {
        if (child.type === Delete) {
            const onClick = child.props.onClick;
            return React.cloneElement(child, {
                onClick: (event) => {
                    if (onClick !== undefined) {
                        onClick(event);
                    }
                    close();
                },
            });
        }
        else if (child.type === React.Fragment) {
            return (React.createElement(React.Fragment, { children: mapChildren(child.props.children, close) }));
        }
    }
    return child;
});
export const ModalCardHead = forwardRefAs((_a, ref) => {
    var { className, children } = _a, rest = tslib_1.__rest(_a, ["className", "children"]);
    return (React.createElement(ModalContext.Consumer, null, ({ close }) => (React.createElement(Generic, Object.assign({ children: mapChildren(children, close), className: classNames("modal-card-head", className), ref: ref }, rest)))));
}, { as: "header" });
ModalCardHead.displayName = "Modal.Card.Head";
//# sourceMappingURL=modal-card-head.js.map