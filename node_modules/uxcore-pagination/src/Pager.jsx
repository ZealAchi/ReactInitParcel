import React from 'react';
import PropTypes from 'prop-types';

class Pager extends React.Component {
  render() {
    const props = this.props;
    const prefixCls = `${props.rootPrefixCls}-item`;
    let cls = `${prefixCls} ${prefixCls}-${props.page}`;

    if (props.active) {
      cls = `${cls} ${prefixCls}-active`;
    }

    let title;
    if (props.page === 1) {
      title = 'First Page';
    } else if (props.last) {
      title = (`Last Page: ${props.page}`);
    } else {
      title = (`Page ${props.page}`);
    }
    return (
      <li title={title} className={cls} onClick={props.onClick}>
        <a>{props.page}</a>
      </li>
    );
  }
}

Pager.propTypes = {
  page: PropTypes.number,
  active: PropTypes.bool,
  last: PropTypes.bool,
};

Pager.defaultProps = {
  page: 0,
  active: false,
  last: false,
};

export default Pager;
