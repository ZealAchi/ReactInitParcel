import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
export const TILE_DEFAULTS = {
    kinds: ["ancestor", "parent", "child"],
    sizes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
};
export const Tile = forwardRefAs((_a, ref) => {
    var { className, kind, size, vertical } = _a, rest = tslib_1.__rest(_a, ["className", "kind", "size", "vertical"]);
    return (React.createElement(Generic, Object.assign({ className: classNames("tile", {
            [`is-${kind}`]: kind,
            [`is-${size}`]: size !== undefined,
            "is-vertical": vertical,
        }, className), ref: ref }, rest)));
}, { as: "div" });
Tile.displayName = "Tile";
Tile.propTypes = {
    kind: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    vertical: PropTypes.bool,
};
//# sourceMappingURL=tile.js.map