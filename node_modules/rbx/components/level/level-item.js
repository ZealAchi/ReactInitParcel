import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
export const LEVEL_ITEM_DEFAULTS = {
    alignments: ["left", "right"],
};
export const LevelItem = forwardRefAs((_a, ref) => {
    var { align, className } = _a, rest = tslib_1.__rest(_a, ["align", "className"]);
    return (React.createElement(Generic, Object.assign({ className: classNames({
            "level-item": align === undefined,
            [`level-${align}`]: align,
        }, className), ref: ref }, rest)));
}, { as: "div" });
LevelItem.displayName = "Level.Item";
LevelItem.propTypes = {
    align: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
//# sourceMappingURL=level-item.js.map