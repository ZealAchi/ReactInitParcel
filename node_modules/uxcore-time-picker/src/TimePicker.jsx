/**
 * TimePicker Component for uxcore
 * @author eternalsky
 *
 * Copyright 2017-2018, Uxcore Team, Alinw.
 * All rights reserved.
 */
import React from 'react';
import RcTimePicker from 'rc-time-picker';
import moment from 'moment';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import i18n from './i18n';

class TimePicker extends React.Component {
  static defaultProps = {
    ...RcTimePicker.defaultProps,
    align: {
      offset: [0, 0],
    },
    locale: 'zh-cn',
    prefixCls: 'uxcore-time-picker',
    transitionName: 'timePickerSlideUp',
    size: 'large',
  };

  static propTypes = {
    ...RcTimePicker.propTypes,
    value: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.object,
    ]),
    defaultValue: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.object,
    ]),
    locale: PropTypes.string,
    size: PropTypes.oneOf([
      'large', 'middle', 'small',
    ]),
  };

  static displayName = 'TimePicker';

  render() {
    const { value, defaultValue, defaultOpenValue,
      prefixCls, onChange, className, locale, size, placeholder, popupClassName } = this.props;
    const otherProps = {
      onChange: (change) => {
        if (typeof onChange === 'function') {
          onChange(change ? change.valueOf() : change);
        }
      },
      defaultOpenValue: moment(defaultOpenValue).locale(locale),
      className: classnames(className, `${prefixCls}-${size}-size`),
      popupClassName: classnames(popupClassName, `${prefixCls}-panel-${size}-size`),
      placeholder: placeholder || i18n[locale].placeholder,
    };
    if (value) {
      otherProps.value = moment(value).locale(locale);
    }
    if (defaultValue) {
      otherProps.defaultValue = moment(defaultValue).locale(locale);
    }
    return (
      <RcTimePicker
        {...this.props}
        {...otherProps}
      />
    );
  }
}

export default TimePicker;

