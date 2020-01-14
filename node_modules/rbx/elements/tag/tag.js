import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
import { TagGroup } from "./tag-group";
export const TAG_DEFAULTS = {
    sizes: ["normal", "medium", "large"],
};
export const Tag = Object.assign(forwardRefAs((_a, ref) => {
    var { children, className, color, delete: isDelete, rounded, size } = _a, rest = tslib_1.__rest(_a, ["children", "className", "color", "delete", "rounded", "size"]);
    const allowedChildren = isDelete === true ? undefined : children;
    return (React.createElement(Generic, Object.assign({ className: classNames("tag", {
            [`is-${size}`]: size,
            [`is-${color}`]: color,
            "is-delete": isDelete,
            "is-rounded": rounded,
        }, className), children: allowedChildren, ref: ref }, rest)));
}, { as: "span" }), { Group: TagGroup });
Tag.displayName = "Tag";
Tag.propTypes = {
    color: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    delete: PropTypes.bool,
    rounded: PropTypes.bool,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
//# sourceMappingURL=tag.js.map