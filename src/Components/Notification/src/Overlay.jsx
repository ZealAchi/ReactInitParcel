/**
 * NoticeIcon Component for uxcore
 * @author Amanda111
 *
 * Copyright 2017-2018, Uxcore Team, Alinw.
 * All rights reserved.
 */
import React from 'react';
import PropTypes from 'prop-types';
import EmptyData from 'uxcore-empty-data';
import Icon from 'uxcore-icon';


class NoticeIcon extends React.Component {
  static displayName = 'NoticeIconOverlay';

  static propTypes = {
    prefixCls: PropTypes.string,
    bottomAction: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.array]),
    emptyIcon: PropTypes.oneOf(['access_restriction', 'active_empty',
      'request_error', 'search_empty', 'unknown_error']),
    emptyText: PropTypes.string,
    icon: PropTypes.string,
    title: PropTypes.string,
    topAction: PropTypes.element,
    children: PropTypes.node,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  renderBottom() {
    const { prefixCls, bottomAction } = this.props;
    const type = Object.prototype.toString.call(bottomAction).slice(8, -1);
    let render;
    if (type === 'Function') {
      render = bottomAction();
    } else if (type === 'Array') {
      const actionGroup = bottomAction.map((item, index) =>
        <div className={`${prefixCls}-bottom-text`} onClick={item.action} key={index}>{item.text}</div>);
      render = (
        <div className={`${prefixCls}-bottom-wrap`}>
          {actionGroup}
        </div>
      );
    } else {
      render = (
        <div className={`${prefixCls}-bottom-wrap`}>
          <div className={`${prefixCls}-bottom-text`} onClick={bottomAction.action}>
            {bottomAction.text}
          </div>
        </div>
      );
    }
    return render;
  }

  renderEmpty() {
    const { prefixCls, emptyIcon, emptyText } = this.props;
    const emptydata = (
      <EmptyData className={`${prefixCls}-empty`} {...(emptyIcon) ? { icon: `https://g.alicdn.com/uxcore/pic/${emptyIcon}.png` } : {}}>
        <div style={{ lineHeight: 2 }}>
          <div className={`${prefixCls}-empty-text`}>{emptyText}</div>
        </div>
      </EmptyData>
    );
    return emptydata;
  }

  render() {
    const { prefixCls, icon, title, topAction, children } = this.props;
    return (
      <div className={`${prefixCls}-container`}>
        <div className={`${prefixCls}-top`}>
          <div className={`${prefixCls}-top-info`}>
            <Icon name={icon} className={`${prefixCls}-small`} usei />
            <span className={`${prefixCls}-title`}>{title}</span>
          </div>
          <div>
            {topAction}
          </div>
        </div>
        <div className={`${prefixCls}-list`}>
          {children || this.renderEmpty()}
        </div>
        <div className={`${prefixCls}-bottom`}>
          {this.renderBottom()}
        </div>
      </div>
    );
  }
}

export default NoticeIcon;
