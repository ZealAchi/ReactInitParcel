/**
 * Forked from project rc-pagination
 * @maintainer eternalsky
 */

import React from 'react';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import Select from 'uxcore-select2';
import Icon from 'uxcore-icon';
import Pager from './Pager';
import Options from './Options';
import i18n from './locale';

function noop() {
}

class Pagination extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.current !== prevState.lastCurrent) {
      return {
        current: nextProps.current,
        _current: nextProps.current,
        lastCurrent: nextProps.current,
        pageSize: prevState.pageSize,
        lastPageSize: prevState.lastPageSize,
      };
    }
    if (nextProps.pageSize !== prevState.lastPageSize) {
      return {
        current: prevState.current,
        _current: prevState.current,
        lastCurrent: prevState.current,
        pageSize: nextProps.pageSize,
        lastPageSize: nextProps.pageSize,
      };
    }
    return null;
  }

  constructor(props) {
    super(props);

    const current = Math.floor(props.current);
    const pageSize = Math.floor(props.pageSize);
    this.state = {
      current,
      _current: current,
      lastCurrent: current,
      pageSize,
      lastPageSize: pageSize,
    };

    [
      'render',
      '_handleChange',
      // '_handleKeyUp',
      // '_handleKeyDown',
      '_changePageSize',
      '_isValid',
      '_prev',
      '_next',
      '_hasPrev',
      '_hasNext',
      '_jumpPrev',
      '_jumpNext',
    ].forEach((method) => {
      this[method] = this[method].bind(this);
      return null;
    });
  }

  // private methods

  _calcPage(p) {
    let pageSize = p;
    if (typeof pageSize === 'undefined') {
      pageSize = this.state.pageSize;
    }
    const total = Math.floor(this.props.total);
    if ([0, undefined, null].indexOf(total) !== -1) {
      return Infinity;
    }
    return Math.floor((total - 1 + this.props.totalSizeOffset) / pageSize) + 1;
  }

  _isValid(page) {
    return typeof page === 'number' && page >= 1 && page !== this.state.current;
  }

  _changePageSize(size) {
    if (typeof size === 'number') {
      let current = this.state.current;

      this.setState({
        pageSize: size,
      });

      if (this.state.current > this._calcPage(size)) {
        current = this._calcPage(size);
        this.setState({
          current,
          _current: current,
        });
      }

      this.props.onShowSizeChange(current, size);
    }
  }

  _handleChange(p) {
    let page = p;
    const me = this;
    if (this._isValid(page)) {
      if (page > this._calcPage()) {
        page = this._calcPage();
      }
      this.setState({
        current: page,
        _current: page,
      }, () => {
        me.props.onChange(page);
      });

      return page;
    }

    return this.state.current;
  }

  _prev() {
    if (this._hasPrev()) {
      this._handleChange(this.state.current - 1);
    }
  }

  _next() {
    if (this._hasNext()) {
      this._handleChange(this.state.current + 1);
    }
  }

  _jumpPrev() {
    this._handleChange(Math.max(1, this.state.current - 5));
  }

  _jumpNext() {
    this._handleChange(Math.min(this._calcPage(), this.state.current + 5));
  }

  _hasPrev() {
    return this.state.current > 1;
  }

  _hasNext() {
    return this.state.current < this._calcPage();
  }

  renderTotal() {
    const { locale, total } = this.props;
    if (this.props.showTotal) {
      return <li className={`${this.props.prefixCls}-total`}>{i18n[locale].total(Math.floor(total))}</li>;
    }
    return null;
  }

  render() {
    const props = this.props;

    const prefixCls = props.prefixCls;
    const allPages = this._calcPage();
    const pagerList = [];
    let jumpPrev = null;
    let jumpNext = null;
    let firstPager = null;
    let lastPager = null;

    if ([0, undefined, null].indexOf(Math.floor(props.total)) !== -1) {
      return (
        <ul className={`${prefixCls} ${props.className}`}>
          <li title="Previous Page" onClick={this._prev} className={`${this._hasPrev() ? '' : `${prefixCls}-disabled `}${prefixCls}-prev`}>
            <Icon usei name="left" />
          </li>
          <div title={`Page ${this.state.current}`} className={`${prefixCls}-unknown-total`}>
            <span className={`${prefixCls}-current`}>{i18n[props.locale].pageNo(this.state._current)}</span>
          </div>
          <li title="Next Page" onClick={this._next} className={`${this._hasNext() ? '' : `${prefixCls}-disabled `}${prefixCls}-next`}>
            <Icon usei name="right" />
          </li>
        </ul>
      );
    }

    if (props.simple) {
      return (
        <ul className={`${prefixCls} ${prefixCls}-simple ${props.className}`}>
          <li title="Previous Page" onClick={this._prev} className={`${this._hasPrev() ? '' : `${prefixCls}-disabled `}${prefixCls}-prev`}>
            <Icon usei name="left" />
          </li>
          <div title={`Page ${this.state.current} of ${allPages}`} className={`${prefixCls}-simple-pager`}>
            <span className={`${prefixCls}-current`}>{this.state._current}</span>
            <span className={`${prefixCls}-slash`}>/</span>
            {allPages}
          </div>
          <li title="Next Page" onClick={this._next} className={`${this._hasNext() ? '' : `${prefixCls}-disabled `}${prefixCls}-next`}>
            <Icon usei name="right" />
          </li>
        </ul>
      );
    }

    const pageShowCount = props.pageShowCount || props.maxUnfoldedLength || 9;
    if (allPages <= pageShowCount) {
      for (let i = 1; i <= allPages; i++) {
        const active = this.state.current === i;
        pagerList.push(<Pager
          rootPrefixCls={prefixCls}
          onClick={this._handleChange.bind(this, i)}
          key={i}
          page={i}
          active={active}
        />);
      }
    } else {
      jumpPrev = (
        <li title="Previous 5 Page" key="prev" onClick={this._jumpPrev} className={`${prefixCls}-jump-prev`}>
          <Icon usei name="more-dot" />
          <Icon usei name="left_double" />
        </li>
      );
      jumpNext = (
        <li title="Next 5 Page" key="next" onClick={this._jumpNext} className={`${prefixCls}-jump-next`}>
          <Icon usei name="more-dot" />
          <Icon usei name="right_double" />
        </li>
      );
      lastPager = (
        <Pager
          last
          rootPrefixCls={prefixCls}
          onClick={this._handleChange.bind(this, allPages)}
          key={allPages}
          page={allPages}
          active={false}
        />);
      firstPager = (
        <Pager
          rootPrefixCls={prefixCls}
          onClick={this._handleChange.bind(this, 1)}
          key={1}
          page={1}
          active={false}
        />
      );

      const current = this.state.current;

      let left = Math.max(1, current - 2);
      let right = Math.min(current + 2, allPages);

      if (current - 1 <= 2) {
        right = 1 + 4;
      }

      if (allPages - current <= 2) {
        left = allPages - 4;
      }

      for (let i = left; i <= right; i++) {
        const active = current === i;
        pagerList.push(<Pager
          rootPrefixCls={prefixCls}
          onClick={this._handleChange.bind(this, i)}
          key={i}
          page={i}
          active={active}
        />);
      }

      if (current - 1 >= 4) {
        pagerList.unshift(jumpPrev);
      }
      if (allPages - current >= 4) {
        pagerList.push(jumpNext);
      }

      if (left !== 1) {
        pagerList.unshift(firstPager);
      }
      if (right !== allPages) {
        pagerList.push(lastPager);
      }
    }

    return (
      <ul
        className={`${prefixCls} ${props.className}`}
        unselectable="unselectable"
      >
        {this.renderTotal()}
        <li title="Previous Page" onClick={this._prev} className={`${this._hasPrev() ? '' : `${prefixCls}-disabled `}${prefixCls}-prev`}>
          <Icon usei name="left" />
        </li>
        {pagerList}
        <li title="Next Page" onClick={this._next} className={`${this._hasNext() ? '' : `${prefixCls}-disabled `}${prefixCls}-next`}>
          <Icon usei name="right" />
        </li>
        <Options
          rootPrefixCls={prefixCls}
          ref={(options) => { this.options = options; }}
          locale={props.locale}
          selectComponentClass={props.selectComponentClass}
          getPopupContainer={props.getSelectPopupContainer}
          selectPrefixCls={props.selectPrefixCls}
          changeSize={this.props.showSizeChanger ? this._changePageSize.bind(this) : null}
          current={this.state.current}
          pageSize={props.pageSize}
          sizeOptions={props.sizeOptions}
          quickGo={this.props.showQuickJumper ? this._handleChange.bind(this) : null}
        />
      </ul>
    );
  }
}

Pagination.propTypes = {
  current: PropTypes.number,
  total: PropTypes.number,
  totalSizeOffset: PropTypes.number,
  locale: PropTypes.string,
  prefixCls: PropTypes.string,
  showTotal: PropTypes.bool,
  pageSize: PropTypes.number,
  sizeOptions: PropTypes.array,
  onChange: PropTypes.func,
  showSizeChanger: PropTypes.bool,
  onShowSizeChange: PropTypes.func,
  selectComponentClass: PropTypes.func,
  showQuickJumper: PropTypes.bool,
  pageShowCount: PropTypes.number,
};

Pagination.defaultProps = {
  current: 1,
  total: 0,
  totalSizeOffset: 0,
  locale: 'zh-cn',
  showTotal: false,
  pageSize: 10,
  sizeOptions: [10, 20, 30, 40],
  onChange: noop,
  className: '',
  selectPrefixCls: 'kuma-select2',
  prefixCls: 'kuma-page',
  selectComponentClass: Select,
  showQuickJumper: false,
  showSizeChanger: false,
  onShowSizeChange: noop,
  pageShowCount: undefined,
};

Pagination.displayName = 'Pagination';

polyfill(Pagination);

export default Pagination;
