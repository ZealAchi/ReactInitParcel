import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class RadiogroupItem extends React.Component {
  handleChange() {
    const me = this;
    me.props.onChange(me.props.value);
  }

  render() {
    const me = this;
    let disabled = false;
    if (me.props.disabled !== undefined) {
      disabled = me.props.disabled;
    } else if (me.props.jsxdisabled !== undefined) {
      disabled = me.props.jsxdisabled;
    }
    return (
      <label
        className={classnames(`${me.props.prefixCls}`, {
          [`${me.props.prefixCls}__disabled`]: disabled,
        })}
      >
        <input
          type="radio"
          disabled={disabled}
          className="kuma-checkbox"
          checked={me.props.checked}
          onChange={me.handleChange.bind(me)}
        />
        <s />
        <span className={`${me.props.prefixCls}-content`}>{me.props.text}</span>
      </label>
    );
  }
}

RadiogroupItem.displayName = 'RadiogroupItem';
RadiogroupItem.propTypes = {
  prefixCls: PropTypes.string,
  text: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};
RadiogroupItem.defaultProps = {
  prefixCls: 'kuma-radio-group-item',
  text: '',
  value: '',
  className: 'kuma-checkbox',
  onChange: () => { },
};

export default RadiogroupItem;
