/**
 * OtherFormField Component for uxcore
 * @author eternalsky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import assign from 'object-assign';

class OtherFormField extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const me = this;
    const style = {
      width: (`${me.props.jsxflex / me.props.totalFlex * 100}%`),
    };
    return (
      <div
        className={classnames({
          [me.props.jsxprefixCls]: true,
          [me.props.className]: !!me.props.className,
        })}
        style={assign({}, style, {
          display: me.props.jsxshow ? 'table' : 'none',
        })}
      >
        {me.props.children}
      </div>
    );
  }
}


OtherFormField.defaultProps = {
  jsxprefixCls: 'kuma-uxform-field kuma-other-uxform-field', // 默认类名
  jsxflex: 1, // 占 Form 的比例，类似于 css3 中的 flex-box
  jsxshow: true,
};

OtherFormField.propTypes = {
  /**
     * @title 类名前缀
     * @veIgnore
     */
  jsxprefixCls: PropTypes.string,
  /**
     * @title 弹性比例
     */
  jsxflex: PropTypes.number,
  /**
     * @title 是否显示
     * @veIgnore
     */
  jsxshow: PropTypes.bool,
};

OtherFormField.displayName = 'OtherFormField';

export default OtherFormField;

