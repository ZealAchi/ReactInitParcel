import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import { makePropTypesFactory, makeValidatingTransformFactory, } from "./factory";
export const makePropTypes = makePropTypesFactory(vars => ({
    badge: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    badgeColor: PropTypes.oneOf(vars.colors),
    badgeOutlined: PropTypes.bool,
    badgeRounded: PropTypes.bool,
    badgeSize: PropTypes.oneOf(vars.badgeSizes),
}));
export const transform = props => {
    const { badge, badgeColor, badgeOutlined, badgeRounded, badgeSize, className } = props, rest = tslib_1.__rest(props, ["badge", "badgeColor", "badgeOutlined", "badgeRounded", "badgeSize", "className"]);
    return Object.assign({ className: classNames({
            badge,
            [`has-badge-${badgeColor}`]: badgeColor,
            "has-badge-outlined": badgeOutlined,
            "has-badge-rounded": badgeRounded,
            [`has-badge-${badgeSize}`]: badgeSize,
        }, className) }, (badge !== undefined ? { "data-badge": badge } : {}), rest);
};
export const makeValidatingTransform = makeValidatingTransformFactory(makePropTypes, transform);
//# sourceMappingURL=badge.js.map