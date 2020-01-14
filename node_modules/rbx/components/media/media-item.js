import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
export const MEDIA_ITEM_DEFAULTS = {
    alignments: ["content", "left", "right"],
};
export const MediaItem = forwardRefAs((_a, ref) => {
    var { align, className } = _a, rest = tslib_1.__rest(_a, ["align", "className"]);
    return (React.createElement(Generic, Object.assign({ className: classNames({ [`media-${align}`]: align }, className), ref: ref }, rest)));
}, {
    align: "content",
    as: "div",
});
MediaItem.displayName = "Media.Item";
MediaItem.propTypes = {
    align: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
//# sourceMappingURL=media-item.js.map