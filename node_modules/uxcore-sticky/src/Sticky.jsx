/**
 * Sticky Component for uxcore
 * @author taoqili
 *
 * Copyright 2017-2018, Uxcore Team, Alinw.
 * All rights reserved.
 */
import React from 'react';
import { findDOMNode } from 'react-dom'
import PropTypes from 'prop-types';
import classnames from 'classnames';


class Sticky extends React.Component {
  static displayName = 'Sticky';

  static propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    offsetTop: PropTypes.number,
    onChange: PropTypes.func,
    container: PropTypes.func
  };

  static defaultProps = {
    prefixCls: 'uxcore-sticky',
    className: '',
    offsetTop: 0,
    onChange: () => {},
    container: () => document
  };

  constructor(props) {
    super(props);
    this.state = {
      sticky: false,
      placeholderHeight: 0,
      width: '100%'
    };
  }

  scroll = ($stickyer) => {
    const {
      offsetTop,
      onChange
    } = this.props;
    const rect = $stickyer.getBoundingClientRect();
    const {
      top,
      height,
      width
    }  = rect;
    if (this.isSticky && top >= offsetTop || !this.isSticky && top < offsetTop) {
      onChange(top < offsetTop)
    }
    this.setState({
      sticky: top < offsetTop,
      placeholderHeight: height,
      width
    }, () => {
      this.isSticky = top < offsetTop
    })
  }

  onScroll = () => {
    const $stickyer = findDOMNode(this.stickyer);
    this.scroll($stickyer)
  }

  componentDidMount() {
    const {
      container,
    } = this.props;
    container().addEventListener('scroll', this.onScroll)
  }

  componentWillUnmount() {
    const {
      container,
    } = this.props;
    container().removeEventListener('scroll', this.onScroll)
  }

  render() {
    const {
      sticky,
      placeholderHeight,
      width
    } = this.state;
    const {
      prefixCls,
      className,
      offsetTop
    } = this.props;
    return (
      <div
        ref={(c) => {this.stickyer = c}}
        className={classnames(
          {
            [prefixCls]: prefixCls,
            [className]: className
          }
        )}
      >
        <div
          className={classnames(`${prefixCls}-placeholder`, { sticky })}
          style={{
            height: placeholderHeight
          }}
        />
        <div
          className={classnames(
            `${prefixCls}-content`,
            {
              sticky
            }
          )}
          style={{
            top: offsetTop,
            width
          }}
        >
          <div>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Sticky;

