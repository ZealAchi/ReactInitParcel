import React from "react";
import { HelpersProps } from "../../base/helpers";
import { Variables } from "../../base/helpers/variables";
export declare type NotificationModifierProps = {
    color?: Variables["colors"];
};
export declare type NotificationProps = HelpersProps & NotificationModifierProps;
export declare const Notification: import("../../base/exotic").ForwardRefAsExoticComponent<NotificationProps, React.ElementType<any>>;
