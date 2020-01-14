/**
 * CrumbItem Component for uxcore
 * @author peijie.dpj
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';

class CrumbItem extends React.Component {

  render() {
    const {...props} = this.props;
    if (props.onClick) {
      props.href = "javascript:void(0);";
    }
    return props.href
      ? <a {...props}>{props.children}</a>
      : <span {...props}>{props.children}</span>;
  }
}

CrumbItem.defaultProps = {
  children: '链接'
}

// http://facebook.github.io/react/docs/reusable-components.html
CrumbItem.propTypes = {
  /**
   * @title 链接
   */
  href: PropTypes.string,
  /**
   * @title 类名
   * @veIgnore
   */
  className: PropTypes.string,
  /**
   * @title 文案
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  /**
   * @title 点击事件
   * @veIgnore
   */
  onClick: PropTypes.func
};

CrumbItem.displayName = 'CrumbItem';

export default CrumbItem;
