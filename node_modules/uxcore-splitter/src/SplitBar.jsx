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

const NonObjectProps = ['className', 'disable', 'hide', 'orientation', 'resizable'];
const OffsetProps = ['prevPaneOffset', 'nextPaneOffset'];

class SplitBar extends React.Component {
  static displayName = 'SplitBar';

  static propTypes = {
    className: PropTypes.string,
    resizable: PropTypes.bool,
    orientation: PropTypes.oneOf(['vertical', 'horizontal']),
    prevPaneOffset: PropTypes.object,
    nextPaneOffset: PropTypes.object,
    onResizeActive: PropTypes.func,
    disable: PropTypes.bool,
    hide: PropTypes.bool,
  }


 // eslint-disable-line
  static defaultProps = {
    className: '',
    resizable: false,
    orientation: 'horizontal',
    prevPaneOffset: 0,
    nextPaneOffset: 0,
    onResizeActive: () => {},
    disable: false,
    hide: false,
  }


  constructor(props) {
    super(props);
    this.state = {
      resizing: false,
      ghostPosition: null,
    };
    this.handleSplitMouseDown = this.handleSplitMouseDown.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.ghostPosition !== this.state.ghostPosition || nextState.resizing !== this.state.resizing) {
      return true;
    }
    if (NonObjectProps.some(propName => nextProps[propName] !== this.props[propName])) {
      return true;
    }
    if (OffsetProps.some(name => !(
      nextProps[name].align === this.props[name].align
        && nextProps[name].start === this.props[name].start
        && nextProps[name].end === this.props[name].end
        && nextProps[name].size === this.props[name].size
    ))) {
      return true;
    }
    return false;
  }

  stopResizing() {
    this.setState({
      resizing: false,
      ghostPosition: null,
    });
  }

  handleSplitMouseDown(e) {
    this.setState({
      resizing: true,
    });
    this.props.onResizeActive(this, {
      x: e.clientX,
      y: e.clientY,
    });
  }

  move(pos) {
    this.setState({
      ghostPosition: pos,
    });
  }

  render() {
    const {
      className, orientation, prevPaneOffset, nextPaneOffset, disable, hide,
    } = this.props;
    const { resizing, ghostPosition } = this.state;
    const barStyle = {};
    const ghostBarStyle = {};
    switch (orientation) {
      case 'vertical':
        if (prevPaneOffset.align === 'left') {
          assign(barStyle, {
            left: prevPaneOffset.size + prevPaneOffset.start,
          });
        } else if (prevPaneOffset.align === 'right' || prevPaneOffset.align === 'none') {
          assign(barStyle, {
            right: nextPaneOffset.size + nextPaneOffset.end,
          });
        }
        assign(barStyle, {
          width: 1,
          height: '100%',
        });
        if (resizing && ghostPosition) {
          assign(ghostBarStyle, {
            left: ghostPosition,
          });
        }
        break;
      case 'horizontal':
      default:
        if (prevPaneOffset.align === 'left') {
          assign(barStyle, {
            top: prevPaneOffset.size + prevPaneOffset.start,
          });
        } else if (prevPaneOffset.align === 'right' || prevPaneOffset.align === 'none') {
          assign(barStyle, {
            bottom: nextPaneOffset.size + nextPaneOffset.end,
          });
        }
        assign(barStyle, {
          width: '100%',
          height: 1,
        });
        if (resizing && ghostPosition) {
          assign(ghostBarStyle, {
            top: ghostPosition,
          });
        }
        break;
    }
    const barProps = {
      className: classnames(className, {
        'split-bar-hide': hide,
        'resize-bar': !disable,
      }),
      style: barStyle,
    };
    if (!disable) {
      assign(barProps, {
        onMouseDown: this.handleSplitMouseDown,
      });
    }
    return (
      <div {...barProps}>
        {
          resizing
            ? <div className="ghost-split-bar" style={ghostBarStyle} />
            : null
        }
      </div>
    );
  }
}

export default SplitBar;
