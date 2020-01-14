import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
export const NAVBAR_SEGMENT_DEFAULTS = {
    alignments: ["start", "end"],
};
export const NavbarSegment = forwardRefAs((_a, ref) => {
    var { align, className } = _a, rest = tslib_1.__rest(_a, ["align", "className"]);
    return (React.createElement(Generic, Object.assign({ className: classNames({
            [`navbar-${align}`]: align,
        }, className), ref: ref }, rest)));
}, { as: "div" });
NavbarSegment.displayName = "Navbar.Segment";
NavbarSegment.propTypes = {
    align: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
//# sourceMappingURL=navbar-segment.js.map