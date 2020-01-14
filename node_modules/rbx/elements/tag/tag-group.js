import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
export const TAG_GROUP_DEFAULTS = {
    sizes: ["medium", "large"],
};
export const TagGroup = forwardRefAs((_a, ref) => {
    var { className, gapless, size } = _a, rest = tslib_1.__rest(_a, ["className", "gapless", "size"]);
    return (React.createElement(Generic, Object.assign({ className: classNames("tags", {
            [`are-${size}`]: size,
            "has-addons": gapless,
        }, className), ref: ref }, rest)));
}, { as: "span" });
TagGroup.displayName = "Tag.Group";
TagGroup.propTypes = {
    gapless: PropTypes.bool,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
//# sourceMappingURL=tag-group.js.map