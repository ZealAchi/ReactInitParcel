/**
 * EmptyData Component for uxcore
 * @author eternalsky
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */
import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

export default class EmptyData extends React.Component {
  // http://facebook.github.io/react/docs/reusable-components.html
  static propTypes = {
    prefixCls: PropTypes.string,
    icon: PropTypes.string,
    largeIcon: PropTypes.string,
    style: PropTypes.object,
    type: PropTypes.oneOf(['normal', 'large']),
  };

  static defaultProps = {
    prefixCls: 'kuma-empty-data',
    children: '暂无数据',
    type: 'normal',
    icon: '//g.alicdn.com/uxcore/pic/empty.png',
    largeIcon: '//g.alicdn.com/uxcore/pic/empty.png',
  };

  static displayName = 'EmptyData';

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const me = this;
    const { prefixCls, children, type, icon, largeIcon, style, className } = me.props;
    const iconMap = {
      normal: icon,
      large: largeIcon,
    };
    return (
      <div
        className={classnames({
          [`${prefixCls} ${type}`]: true,
          [className]: !!className,
        })}
        style={style}
      >
        <div
          className={`${prefixCls}-icon`}
          style={{
            backgroundImage: `url(${iconMap[type]})`,
          }}
        />
        <div className={`${prefixCls}-content`}>{children}</div>
      </div>
    );
  }
}
