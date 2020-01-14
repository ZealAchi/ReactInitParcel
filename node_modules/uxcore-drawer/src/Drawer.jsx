/**
 * Drawer Component for uxcore
 * @author kewenlei
 *
 * Copyright 2017-2018, Uxcore Team, Alinw.
 * All rights reserved.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Dialog from 'uxcore-dialog';

const WIDTH_MAP = { small: 400, normal: 780, large: 1160 };

class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.handleWidth = this.handleWidth.bind(this);
    this.handleOptions = this.handleOptions.bind(this);
    this.getStyle = this.getStyle.bind(this);
    this.getChild = this.getChild.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.children = null;
  }

  getChild() {
    const { children } = this.props;
    const childrens = React.Children.toArray(children);
    childrens.forEach(child => {
      const { type } = child;
      if (type && type.displayName === 'Drawer') {
        this.children = child;
      }
    });
  }

  getStyle() {
    const { zIndex, style, visible } = this.props;

    const styleObject = {
      zIndex,
      transition: null,
      ...style,
    };

    if (visible) {
      this.getChild();
    }

    if (this.children) {
      if (this.children.props.visible) {
        styleObject.transform = this.getTransForm();
        styleObject.transition = 'transform .4s ease ';
      } else if (visible) {
        styleObject.transform = 'translateX(0)';
        styleObject.transition = 'transform .4s ease ';
      }
    }
    return styleObject;
  }

  getTransForm() {
    const { placement } = this.props;
    const childWidth = this.handleWidth(this.children.props);
    let dist = this.showWidth - childWidth;
    if (dist < 0) {
      dist = Math.abs(dist) + 230;
    } else {
      dist = dist > 230 ? 230 : 230 + childWidth - this.showWidth;
    }
    if (placement === 'left') {
      return `translateX(${dist}px)`;
    }
    return `translateX(-${dist}px)`;
  }

  firstUpperCase(str) {
    return str.toLowerCase().replace(/( |^)[a-z]/g, L => L.toUpperCase());
  }

  handleCancel(e) {
    const { onCancel } = this.props;
    if (onCancel) {
      onCancel(e);
    }
  }

  handleOptions() {
    const {
      placement,
      showFooter,
      footer,
      className,
      size,
      width,
      prefixCls,
      style,
      onCancel,
      ...props
    } = this.props;
    const placementStr = this.firstUpperCase(placement);
    const showWidth = this.handleWidth();
    const commonProps = {
      width: showWidth,
      transitionName: `dialogSlide${placementStr}`,
      ...props,
    };
    this.showWidth = showWidth;
    if (!showFooter) {
      commonProps.footer = null;
      return commonProps;
    }
    if (footer) {
      commonProps.footer = footer;
      return commonProps;
    }
    return commonProps;
  }

  handleWidth(comp) {
    const { size, width } = comp || this.props;
    if (width) {
      return width;
    }
    return WIDTH_MAP[size];
  }

  render() {
    const { props } = this;
    const { prefixCls, className, placement, title, showFooter, size } = props;
    const classNames = classnames(className, {
      [`${prefixCls}`]: true,
      [`${prefixCls}-${size}`]: true,
      [`${prefixCls}-${placement}`]: true,
      [`${prefixCls}-hastitle`]: !!title,
      [`${prefixCls}-hasfooter`]: showFooter,
    });
    const drawerOptions = this.handleOptions();
    return (
      <Dialog
        ref={c => {
          this.drawer = c;
        }}
        className={classNames}
        onCancel={this.handleCancel}
        {...drawerOptions}
        style={this.getStyle(drawerOptions.width)}
      />
    );
  }
}
Drawer.displayName = 'Drawer';
Drawer.propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
  visible: PropTypes.bool,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  showFooter: PropTypes.bool,
  footer: PropTypes.node,
  closable: PropTypes.bool,
  maskClosable: PropTypes.bool,
  locale: PropTypes.string,
  wrapClassName: PropTypes.string,
  style: PropTypes.object,
  zIndex: PropTypes.number,
  placement: PropTypes.oneOf(['left', 'right', 'top']),
};
Drawer.defaultProps = {
  prefixCls: 'kuma-drawer',
  className: '',
  title: '',
  visible: false,
  size: 'small',
  width: '',
  closable: true,
  maskClosable: true,
  locale: 'zh-cn',
  wrapClassName: '',
  style: {},
  zIndex: 1000,
  placement: 'right',
  showFooter: true,
  onOk: null,
  onCancel: null,
  footer: null,
};
export default Drawer;
