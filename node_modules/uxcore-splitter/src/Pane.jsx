/**
 * Splitter Component for uxcore
 * @author vincent.bian
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */
import React from 'react';
import classnames from 'classnames';
import assign from 'object-assign';
import PropTypes from 'prop-types';
import Splitter from './SplitBar';

class Pane extends React.Component {
  static displayName = 'Pane';

  // eslint-disable-line
  static defaultProps = {
    className: '',
    defaultSize: 'auto',
    size: undefined,
    resizable: false,
    collapsible: false,
    orientation: 'horizontal',
    offset: null,
    parentSplitter: null,
    collapse: null,
    defaultCollapse: null,
    onTogglePane: () => { },
    onCollapse: () => { },
  }

  static propTypes = {
    className: PropTypes.string,
    defaultSize: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    resizable: PropTypes.bool,
    collapsible: PropTypes.bool,
    orientation: PropTypes.oneOf(['vertical', 'horizontal']),
    offset: PropTypes.object,
    parentSplitter: PropTypes.object,
    collapse: PropTypes.oneOf(['collapsed', 'uncollapsed']),
    defaultCollapse: PropTypes.oneOf(['collapsed', 'uncollapsed']),
    onTogglePane: PropTypes.func,
    onCollapse: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      size: props.size || props.defaultSize,
      paneStyle: {},
      collapsed: props.collapse === 'collapsed' || props.defaultCollapse === 'collapsed',
      __size: null,
    };
    this.handleCollapse = this.handleCollapse.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.size === this.props.size) {
      if (nextProps.collapse !== this.props.collapse) {
        this.updateByCollapse();
      } else if (nextProps.offset && nextProps.offset.align) {
        this.getPaneStyleByProps(nextProps);
      }
    } else {
      this.setState({
        size: nextProps.size,
      }, () => {
        this.props.parentSplitter.calculatePaneOffset();
      });
    }
  }

  handleCollapse() {
    const { collapse } = this.props;
    const { collapsed } = this.state;
    if (!collapse) {
      this.updateByCollapse();
    }
    this.props.onCollapse(!collapsed);
  }

  updateByCollapse() {
    const { collapsed, size, __size } = this.state;
    const state = {
      collapsed: !collapsed,
    };
    if (collapsed) {
      assign(state, {
        size: __size || this.props.size || this.props.defaultSize,
        __size: 0,
      });
    } else {
      assign(state, {
        __size: size,
      });
    }
    this.setState(state, () => {
      this.props.onTogglePane();
    });
  }

  getPaneStyleByProps(props) {
    const paneStyle = {};
    const { offset, orientation } = props;
    const size = offset.align !== 'none' ? offset.size : 'auto';
    switch (orientation) {
      case 'vertical':
        if (offset.align === 'left') {
          assign(paneStyle, {
            left: offset.start,
            width: size,
          });
        } else if (offset.align === 'right') {
          assign(paneStyle, {
            right: offset.end,
            width: size,
          });
        } else {
          assign(paneStyle, {
            left: offset.start,
            right: offset.end,
          });
        }
        break;
      case 'horizontal':
      default:
        if (offset.align === 'left') {
          assign(paneStyle, {
            top: offset.start,
            height: size,
          });
        } else if (offset.align === 'right') {
          assign(paneStyle, {
            bottom: offset.end,
            height: size,
          });
        } else {
          assign(paneStyle, {
            top: offset.start,
            bottom: offset.end,
          });
        }
        break;
    }
    this.setState({
      paneStyle,
      size,
    });
  }

  getCurrentSize() {
    const { collapsed } = this.state;
    return collapsed ? 'collapsed' : this.state.size;
  }

  render() {
    const {
      className, orientation, offset, collapsible,
    } = this.props;
    const { paneStyle, collapsed } = this.state;
    let cls;
    if (offset) {
      cls = classnames(className, {
        [`align-${offset.align}`]: offset,
      });
    } else {
      cls = className;
    }
    return (
      <div
        className={classnames(cls, {
          'pane-collapsed': collapsed,
        })}
        style={paneStyle}
        ref={pane => (this.pane = pane)}
      >
        {
          collapsible
            ? (
              <div
                className={classnames('toggle-pane', {
                  'toggle-pane-collapsed': collapsed,
                })}
                onClick={this.handleCollapse}
              />
            ) : null
        }
        {this.renderContent()}
      </div>
    );
  }

  renderContent() {
    const { children } = this.props;
    if (typeof children === 'string') {
      return (
        <div className="pane-content">
          {children}
        </div>
      );
    }
    return (
      <div className="pane-content">
        {
          React.Children.map(children, Comp => React.cloneElement(Comp))
        }
      </div>
    );
  }
}

export default Pane;
