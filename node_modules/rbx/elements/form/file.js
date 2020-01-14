import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
import { FileCTA } from "./file-cta";
import { FileIcon } from "./file-icon";
import { FileInput } from "./file-input";
import { FileLabel } from "./file-label";
import { FileName } from "./file-name";
export const FILE_DEFAULTS = {
    alignments: ["centered", "right"],
    sizes: ["small", "medium", "large"],
};
export const File = Object.assign(forwardRefAs((_a, ref) => {
    var { align, boxed, className, color, fullwidth, hasName, size } = _a, rest = tslib_1.__rest(_a, ["align", "boxed", "className", "color", "fullwidth", "hasName", "size"]);
    return (React.createElement(Generic, Object.assign({ className: classNames("file", {
            "has-name": hasName,
            [`is-${align}`]: align,
            "is-boxed": boxed,
            [`is-${color}`]: color,
            "is-fullwidth": fullwidth,
            [`is-${size}`]: size,
        }, className), ref: ref }, rest)));
}, { as: "div" }), {
    CTA: FileCTA,
    Icon: FileIcon,
    Input: FileInput,
    Label: FileLabel,
    Name: FileName,
});
File.displayName = "File";
File.propTypes = {
    align: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    boxed: PropTypes.bool,
    color: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    fullwidth: PropTypes.bool,
    hasName: PropTypes.bool,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
//# sourceMappingURL=file.js.map