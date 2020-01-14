
/* eslint-disable class-methods-use-this */

import classnames from 'classnames';
import assign from 'object-assign';
import React from 'react';
import Tooltip from 'uxcore-tooltip';
import PropTypes from 'prop-types';

class CellField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pass: true,
    };
  }

  componentDidMount() {
    const me = this;
    if (!me.props.standalone) {
      me.props.attachCellField(me.validate.bind(this), me.getName());
    }
  }

  componentWillUnmount() {
    const me = this;
    if (!me.props.standalone) {
      me.props.detachCellField(me.getName());
    }
  }

  getName() {
    const me = this;
    return `${me.props.column.dataKey}.${me.props.index}`;
  }

  validate(value, cb) {
    const me = this;
    const actualValue = value === undefined ? me.props.value : value;
    const rowData = me.props.rowData;
    const { rules } = me.props.column;
    let pass = true;
    let errMsg = '';
    if (typeof rules === 'object' && !Array.isArray(rules)) {
      pass = !!rules.validator(actualValue, rowData);
      errMsg = rules.errMsg;
    } else if (Array.isArray(rules)) {
      for (let i = 0; i < rules.length; i++) {
        pass = rules[i].validator(actualValue, rowData);
        if (!pass) {
          errMsg = rules[i].errMsg;
          break;
        }
      }
    } else if (typeof rules === 'function') {
      // pass should be false if rules return a string which is an errMsg;
      errMsg = rules(actualValue, rowData);
      pass = (errMsg === true || errMsg === undefined);
      errMsg = typeof errMsg === 'boolean' ? '' : errMsg;
    }
    if (cb) {
      cb(pass);
    }
    const newState = {
      pass,
    };

    if (errMsg) {
      newState.errMsg = errMsg;
    }
    me.setState(newState);
    return pass;
  }

  addSpecificClass() {
    return '';
  }


  handleDataChange(obj) {
    const me = this;
    const { value } = obj;
    me.validate(value, (pass) => {
      me.props.handleDataChange(assign({}, obj, {
        jsxid: me.props.rowData.jsxid,
        column: me.props.column,
        pass,
      }));
    });
  }

  renderContent() {

  }

  render() {
    const me = this;
    const specificCls = me.addSpecificClass();
    let content = me.renderContent();
    if (content) {
      content = (
        <Tooltip
          placement="bottom"
          overlay={<span>{this.state.errMsg}</span>}
          visible={!this.state.pass && this.state.errMsg}
          overlayClassName={`${me.props.prefixCls}-tooltip`}
          getTooltipContainer={me.props.getTooltipContainer}
        >
          {content}
        </Tooltip>
      );
    }
    return (
      <div
        className={classnames({
          hasError: !me.state.pass,
          [specificCls]: !!specificCls,
          [me.props.prefixCls]: true,
          [me.props.className]: !!me.props.className,
        })}
      >
        {content}
      </div>
    );
  }
}

CellField.displayName = 'CellField';
CellField.propTypes = {
  prefixCls: PropTypes.string,
  standalone: PropTypes.bool,
};

CellField.defaultProps = {
  prefixCls: 'kuma-uxtable-cell-field',
  standalone: false,
};

export default CellField;
