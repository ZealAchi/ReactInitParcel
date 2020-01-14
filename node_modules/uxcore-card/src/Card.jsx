/**
 * Card Component for uxcore
 * @author eternalsky
 *
 * Copyright 2017-2018, Uxcore Team, Alinw.
 * All rights reserved.
 */
import React from 'react';
import ReactDom from 'react-dom'
import PropTypes from 'prop-types';
import Tooltip from 'uxcore-tooltip';
import Icon from 'uxcore-icon';
import Animate from 'uxcore-animate';
import classnames from 'classnames';
import util from './util';

class Card extends React.Component {
  static displayName = 'Card';

  static propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    icon: PropTypes.node,
    title: PropTypes.node,
    tip: PropTypes.node,
    overlayStyleOfTip: PropTypes.object,
    placementOfTip: PropTypes.string,
    tipIconTheme: PropTypes.string,
    extra: PropTypes.node,
    children: PropTypes.node,
    showCollapseIcon: PropTypes.bool,
    onCollapseChange: PropTypes.func,
    contentHeight: PropTypes.number,
    contentPaddingSize: PropTypes.oneOf(['middle', 'none']),
    defaultCollapsed: PropTypes.bool,
    keepAlive: PropTypes.bool
  };

  static defaultProps = {
    prefixCls: 'uxcore-card',
    className: undefined,
    icon: undefined,
    title: undefined,
    tip: undefined,
    tipIconTheme: 'light',
    overlayStyleOfTip: {},
    placementOfTip: 'top',
    extra: undefined,
    children: undefined,
    showCollapseIcon: false,
    onCollapseChange: () => {
    },
    contentHeight: undefined,
    contentPaddingSize: 'middle',
    defaultCollapsed: false,
    keepAlive: false
  };

  constructor(props) {
    super(props);
    this.state = {
      collapsed: props.defaultCollapsed,
    };
    if (props.keepAlive) {
      this.height = props.contentHeight
      this.maxHeight = props.contentHeight
    }
  }

  getDom() {
    return ReactDom.findDOMNode(this.content)
  }

  componentDidMount() {
    if (this.props.keepAlive) {
      const dom = this.getDom();
      const pfx = ['webkit', 'moz', 'MS', 'o', ''];
      const prefixedEventListener = (element, type, callback) => {
        for (var p = 0; p < pfx.length; p++) {
          if (!pfx[p]) type = type.toLowerCase();
          element.addEventListener(pfx[p] + type, callback, false);
        }
      };
      prefixedEventListener(dom, 'transitionend' ,function(e){
        if (dom.style.height !== '0px') {
          dom.style.height = ''
        }
      });
      if (!this.state.collapsed) {
        this.height = dom.getBoundingClientRect().height
        dom.style.maxHeight = this.maxHeight + 'px'
      }
    }
  }
  componentDidUpdate() {
    if (this.props.keepAlive) {
      if (!this.state.collapsed) {
        const dom = this.getDom()
        dom.style.height = '';
        setTimeout(() => {
          this.height = dom.getBoundingClientRect().height
          dom.style.height = this.height + 'px'
        }, 200)
      }
    }
  }

  handleCollapseIconClick = () => {
    this.setState(prevState => ({
      collapsed: !prevState.collapsed,
    }), () => {
      const { onCollapseChange } = this.props;
      const { collapsed } = this.state;
      onCollapseChange(collapsed);
    });
  }

  renderHeader() {
    const {
      prefixCls,
      icon,
      title,
      tip,
      extra,
      showCollapseIcon,
      overlayStyleOfTip,
      placementOfTip,
      tipIconTheme
    } = this.props;

    if (!icon && !title && !tip && !extra) return null;

    const newOverlayStyle = {
      maxWidth: 400,
      textAlign: 'left',
      ...overlayStyleOfTip,
    };

    return (
      <div className={`${prefixCls}-header`}>
        <div className={`${prefixCls}-title`}>
          {icon ? (
            <div className={`${prefixCls}-title-icon`}>
              {icon}
            </div>
          ) : null}
          <div
            className={classnames(`${prefixCls}-title-text`, {
              [`${prefixCls}-title-text__has-icon`]: !!icon,
              [`${prefixCls}-title-text__has-tip`]: !!tip,
            })}
          >
            {title}
          </div>
          {tip ? (
            <div className={`${prefixCls}-title-tip`}>
              <Tooltip
                overlayStyle={newOverlayStyle}
                overlay={tip}
                placement={placementOfTip}
                trigger={['hover']}
                overlayClassName={`${tipIconTheme === 'dark' ? '' : 'kuma-tooltip-dark'}`}
              >
                <Icon usei name={`${tipIconTheme === 'dark' ? 'tishi-full' : 'xinxitishicopy'}`} className={`${prefixCls}-title-tip-icon`} />
              </Tooltip>
            </div>
          ) : null}
        </div>
        {(extra || showCollapseIcon) ? (
          <div className={`${prefixCls}-extra`}>
            {extra}
            {this.renderCollapseIcon()}
          </div>
        ) : null}
      </div>
    );
  }

  renderCollapseIcon() {
    const { prefixCls, showCollapseIcon } = this.props;
    if (!showCollapseIcon) {
      return null;
    }
    const { collapsed } = this.state;
    return (
      <Icon
        usei
        name='bottom'
        className={classnames(`${prefixCls}-collapse-icon`, {
          [`${prefixCls}-collapse-icon__collapsed`]: !collapsed,
        })}
        onClick={this.handleCollapseIconClick}
      />
    );
  }

  renderContent() {
    const { collapsed } = this.state;
    const {
      prefixCls,
      children,
      contentPaddingSize,
      contentHeight,
      keepAlive
    } = this.props;
    let style = {}
    if (!keepAlive) {
      if (collapsed ) return null;
      if (contentHeight) {
        style = {
          height: contentHeight
        };
      }
    } else {
      style = {
        height: collapsed ? 0 : this.height ,
        paddingTop: collapsed ? 0 : 24,
        paddingBottom: collapsed ? 0 : 24
      }
    }

    return (
      <div
        className={classnames(`${prefixCls}-content`, {
          [`${prefixCls}-content-${contentPaddingSize}-padding`]: !!contentPaddingSize,
        })}
        ref={(c) => {this.content = c}}
        style={style}
      >
        {children}
      </div>
    );
  }

  render() {
    const { prefixCls, className, contentHeight, keepAlive } = this.props;

    return (
      <div className={classnames(prefixCls, className)}>
        {this.renderHeader()}
        {
          !keepAlive ?
            <Animate
              component=''
              animation={{
                enter: (node, done) => {
                  util.toggleHeightAnim(node, true, contentHeight, done);
                },
                leave: (node, done) => {
                  util.toggleHeightAnim(node, false, contentHeight, done);
                },
              }}
            >
              {this.renderContent()}
            </Animate> :
            this.renderContent()
        }
      </div>
    );
  }
}

export default Card;
