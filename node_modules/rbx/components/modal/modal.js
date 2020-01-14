import PropTypes from "prop-types";
import React from "react";
import { forwardRefAs } from "../../base";
import { ModalBackground } from "./modal-background";
import { ModalCard } from "./modal-card";
import { ModalClose } from "./modal-close";
import { ModalContainer } from "./modal-container";
import { ModalContent } from "./modal-content";
import { ModalContext } from "./modal-context";
import { ModalPortal } from "./modal-portal";
const propTypes = {
    active: PropTypes.bool,
    closeOnBlur: PropTypes.bool,
    closeOnEsc: PropTypes.bool,
    clipped: PropTypes.bool,
    containerClassName: PropTypes.string,
    document: PropTypes.object,
    onClose: PropTypes.func,
};
export const Modal = Object.assign(forwardRefAs((props, ref) => React.createElement(ModalContainer, Object.assign({ innerRef: ref }, props)), {
    as: "div",
    clipped: true,
}), {
    Background: ModalBackground,
    Card: ModalCard,
    Close: ModalClose,
    Container: ModalContainer,
    Content: ModalContent,
    Context: ModalContext,
    Portal: ModalPortal,
    propTypes,
});
//# sourceMappingURL=modal.js.map