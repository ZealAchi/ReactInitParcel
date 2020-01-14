/**
 * ButtonGroup Component for uxcore
 * @author eternalsky
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Separated from './Separated';

class ButtonGroup extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    separated: PropTypes.bool,
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    locale: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.string,
  }

  static defaultProps = {
    prefixCls: 'kuma-button-group',
    locale: 'zh-cn',
    type: 'outline',
    size: 'medium',
  }

  render() {
    const { children, separated, prefixCls, className, type, size } = this.props;
    let tmpChildren = children && children.splice ? children : [children];
    const newChildren = React.Children.map(tmpChildren.filter(child=>{
      return child !== null
    }), child => React.cloneElement(child, {
      type: separated ? child.props.type : type,
      size,
    }));
    if (separated) {
      return (
        <Separated {...this.props} prefixCls={`${prefixCls}-separated`}>
          {newChildren}
        </Separated>
      );
    }

    return (
      <div
        className={classnames(prefixCls, {
          [className]: !!className,
        })}
      >
        {newChildren}
      </div>
    );
  }
}

ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;
