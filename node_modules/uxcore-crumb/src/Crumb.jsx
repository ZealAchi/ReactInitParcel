/**
 * Crumb Component for uxcore
 * @author peijie.dpj
 *
 * Copyright 2014-2017, Uxcore Team, Alinw.
 * All rights reserved.
 */

import CrumbItem from './CrumbItem';

import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

class Crumb extends React.Component {

  render() {
    const me = this;

    return (
      <div
        className={classnames({
          [me.props.prefixCls]: true,
          [me.props.className]: !!me.props.className,
        })}
      >
        {me.props.children}
      </div>
    );
  }
}

Crumb.defaultProps = {
  prefixCls: 'kuma-uxcrumbs',
  className: '',
};


// http://facebook.github.io/react/docs/reusable-components.html
Crumb.propTypes = {
  /**
   * @title 类名前缀
   * @veIgnore
   */
  prefixCls: PropTypes.string,
  /**
   * @title CSS类名
   * @veIgnore
   */
  className: PropTypes.string,
};

Crumb.Item = CrumbItem;

Crumb.displayName = 'Crumb';

export default Crumb;
