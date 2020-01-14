import assign from 'object-assign';
import React from 'react';
import PropTypes from 'prop-types';
import CellField from './CellField';

const Input = props =>
  <input className="kuma-input" {...props} value={props.value} onChange={(e) => { props.onChange(e.target.value); }} />;

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const createCellField = (options) => {
  class CustomField extends CellField {
    renderContent() {
      const me = this;
      const defaultOptions = {
        valuePropName: 'value',
        changePropName: 'onChange',
        component: <Input />,
        processValue: value => value,
        processText: value => JSON.stringify(value),
      };
      const newOptions = assign({}, defaultOptions, options);
      return React.cloneElement(newOptions.component, {
        [newOptions.valuePropName]: me.props.value,
        [newOptions.changePropName]: (...args) => {
          me.handleDataChange({
            value: newOptions.processValue.apply(me, args),
            text: newOptions.processText.apply(me, args),
          });
        },
        ...(me.props.column.config || {}),
      });
    }
  }
  return CustomField;
};

export default createCellField;
