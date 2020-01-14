import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

class Row extends React.Component {
  render() {
    const { componentClass, ...rest } = this.props;
    const ComponentClass = componentClass;

    return (
      <ComponentClass {...rest} className={classNames(this.props.className, 'kuma-row')}>
        {this.props.children}
      </ComponentClass>
    );
  }
}

Row.displayName = 'Row';
Row.propTypes = {
  /**
   * You can use a custom element for this component
   */
  componentClass: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
  ]),
  children: PropTypes.node,
  className: PropTypes.string,
};
Row.defaultProps = {
  componentClass: 'div',
};
export default Row;
