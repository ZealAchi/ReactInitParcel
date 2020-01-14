/**
 * Title Component for uxcore
 * @author eternalsky
 *
 * Copyright 2015-2018, Uxcore Team, Alinw.
 * All rights reserved.
 */

import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Title extends Component {
  static displayName = 'Title';

  static propTypes = {
    children: PropTypes.any,
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.oneOf(['primary', 'secondary', 'thirdary']),
    noDecoration: PropTypes.bool,
  };

  static defaultProps = {
    prefixCls: 'kuma-title',
    type: 'primary',
    noDecoration: false,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { prefixCls, children, type, className, noDecoration } = this.props;
    return (
      <div
        className={classnames(prefixCls, {
          [`${prefixCls}-${type}`]: true,
          [`${prefixCls}-no-decoration`]: noDecoration,
          [className]: !!className,
        })}
      >
        {children}
      </div>
    );
  }
}
