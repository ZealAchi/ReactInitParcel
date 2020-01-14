import * as tslib_1 from "tslib";
import classNames from "classnames";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
import { MediaItem } from "./media-item";
export const Media = Object.assign(forwardRefAs((_a, ref) => {
    var { className } = _a, rest = tslib_1.__rest(_a, ["className"]);
    return (React.createElement(Generic, Object.assign({ className: classNames("media", className), ref: ref }, rest)));
}, { as: "article" }), { Item: MediaItem });
Media.displayName = "Media";
//# sourceMappingURL=media.js.map