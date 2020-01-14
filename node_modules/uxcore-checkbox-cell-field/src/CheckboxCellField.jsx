/**
 * CheckboxCellField Component for uxcore
 * @author eternalsky
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */
const CellField = require('uxcore-cell-field');
const assign = require('object-assign');
const CheckboxGroup = require('uxcore-checkbox-group');
const React = require('react');

const { Item } = CheckboxGroup;

class CheckboxCellField extends CellField {

  getTextMap() {
    const me = this;
    const obj = {};
    const { column, rowData } = me.props;
    const { config, renderChildren } = column;
    if (column.renderChildren) {
      renderChildren().forEach((item) => {
        obj[item.props.value] = item.props.text;
      });
    } else if (config && config.data) {
      let configData = [];
      if (typeof config.data === 'function') {
        configData = config.data(rowData);
      }
      if (config.data instanceof Array) {
        configData = config.data;
      }
      configData.forEach((item) => {
        obj[item.value] = item.text;
      });
    }
    return obj;
  }

  renderChildren() {
    const me = this;
    const { column, rowData } = me.props;
    const { renderChildren, config } = column;
    if (renderChildren) {
      return renderChildren(rowData);
    }
    if (config) {
      let configData = [];
      if (typeof config.data === 'function') {
        configData = config.data(rowData);
      }
      if (config.data instanceof Array) {
        configData = config.data;
      }
      return configData.map((item, index) =>
        <Item key={index} value={item.value} text={item.text} disabled={item.disabled} />);
    }
    return [];
  }

  renderContent() {
    const me = this;
    const textMap = me.getTextMap();
    const fieldProps = {
      onChange: (value) => {
        me.handleDataChange({
          text: (value || []).map(item => textMap[item]).join(', '),
          value,
        });
      },
      value: me.props.value,
    };
    if (me.props.column.config) {
      const customProps = { ...me.props.column.config };
      Object.keys(fieldProps).forEach((item) => {
        delete customProps[item];
      });
      assign(fieldProps, customProps);
    }
    return (
      <CheckboxGroup {...fieldProps}>
        {me.renderChildren()}
      </CheckboxGroup>
    );
  }

}

CheckboxCellField.propTypes = assign({}, CellField.propTypes);

CheckboxCellField.defaultProps = assign({}, CellField.defaultProps);

module.exports = CheckboxCellField;
