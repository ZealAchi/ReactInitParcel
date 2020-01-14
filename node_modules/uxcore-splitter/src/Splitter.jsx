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
import SplitBar from './SplitBar';

function clearSelection() {
  if (window.getSelection) {
    if (window.getSelection().empty) {
      window.getSelection().empty();
    } else if (window.getSelection().removeAllRanges) {
      window.getSelection().removeAllRanges();
    }
  } else if (document.selection) {
    document.selection.empty();
  }
}

class Splitter extends React.Component {
  static displayName = 'Splitter';

  static propTypes = {
    prefixCls: PropTypes.string,
    orientation: PropTypes.oneOf(['vertical', 'horizontal']),
    className: PropTypes.string,
    onResize: PropTypes.func,
  }

 // eslint-disable-line
  static defaultProps = {
    prefixCls: 'uxcore-splitter',
    orientation: 'horizontal',
    className: '',
    onResize: (offsets, pane, index) => {
      console.log(offsets, pane, index);
    },
  }


  constructor(props) {
    super(props);
    this.state = {
      paneOffset: [],
      resizeBar: null,
      resizeBarIndex: 0,
      autoSizePaneSize: null,
    };
    this.paneList = [];
    this.resizeOriginPos = null;
    this.delta = 0;
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.autoSizePaneSize = 0;
  }

  componentDidMount() {
    this.calculatePaneOffset();
  }

  calculatePaneOffset() {
    let paneOffset = [];
    let offset; let
      prevOffset;
    const sizeAry = this.paneList
      .map((pane, i) => this.paneList[i].getCurrentSize())
      .map(size => (size === 'collapsed' ? 0 : size));
    let autoSizePaneIndex = false;
    let leftAlignPaneAry = [];
    let rightAlignPaneAry = [];
    sizeAry.forEach((size, i) => {
      if (typeof size !== 'number') {
        if (autoSizePaneIndex !== false) {
          console.warn('uxcore-splitter: the splitter has more than one pane which is auto sized.');
        }
        autoSizePaneIndex = i;
      } else if (autoSizePaneIndex !== false) {
        rightAlignPaneAry.push(size);
      } else {
        leftAlignPaneAry.push(size);
      }
    });
    leftAlignPaneAry = leftAlignPaneAry.reduce((prev, size, index) => {
      if (index === 0) {
        prev.push({
          start: 0,
          size,
          align: 'left',
        });
      } else {
        prev.push({
          start: prev[index - 1].start + prev[index - 1].size,
          size,
          align: 'left',
        });
      }
      return prev;
    }, []);
    rightAlignPaneAry = rightAlignPaneAry.reverse().reduce((prev, size, index) => {
      if (index === 0) {
        prev.unshift({
          end: 0,
          size,
          align: 'right',
        });
      } else {
        prev.unshift({
          end: prev[0].end + prev[0].size,
          size,
          align: 'right',
        });
      }
      return prev;
    }, []);
    paneOffset = paneOffset.concat(leftAlignPaneAry);
    if (autoSizePaneIndex !== false) {
      const middlePane = {
        start: 0,
        end: 0,
        align: 'none',
      };
      if (leftAlignPaneAry.length > 0) {
        middlePane.start = leftAlignPaneAry[leftAlignPaneAry.length - 1].start + leftAlignPaneAry[leftAlignPaneAry.length - 1].size;
      }
      if (rightAlignPaneAry.length > 0) {
        middlePane.end = rightAlignPaneAry[0].end + rightAlignPaneAry[0].size;
      }
      paneOffset.push(middlePane);
    }
    paneOffset = paneOffset.concat(rightAlignPaneAry);
    this.setState({
      paneOffset,
      autoSizePaneIndex,
    }, () => {
      this.setAutoSizePane();
    });
  }

  setAutoSizePane() {
    const { autoSizePaneIndex } = this.state;
    const { orientation } = this.props;
    if (typeof autoSizePaneIndex === 'number') {
      if (this.props.orientation === 'vertical') {
        this.autoSizePaneSize = this.paneList[autoSizePaneIndex].pane.clientWidth;
      } else {
        this.autoSizePaneSize = this.paneList[autoSizePaneIndex].pane.clientHeight;
      }
    }
  }

  handleMouseMove(e) {
    const { orientation } = this.props;
    const { resizeBar, resizeBarIndex, paneOffset } = this.state;
    let nextPaneSize; let
      prevPaneSize;
    if (resizeBar) {
      let delta;
      switch (orientation) {
        case 'vertical':
          delta = e.clientX - this.resizeOriginPos.x;
          break;
        case 'horizontal':
        default:
          delta = e.clientY - this.resizeOriginPos.y;
          break;
      }
      // 边界处理
      if (delta > 0) {
        if (paneOffset[resizeBarIndex].align !== 'none') {
          nextPaneSize = paneOffset[resizeBarIndex].size;
          delta = delta > nextPaneSize ? nextPaneSize : delta;
        } else {
          delta = delta > this.autoSizePaneSize ? this.autoSizePaneSize : delta;
        }
      } else if (paneOffset[resizeBarIndex - 1].align !== 'none') {
        prevPaneSize = paneOffset[resizeBarIndex - 1].size;
        delta = Math.abs(delta) > prevPaneSize ? -prevPaneSize : delta;
      } else {
        delta = Math.abs(delta) > this.autoSizePaneSize ? -this.autoSizePaneSize : delta;
      }
      // console.log('handleMouseMove', delta, paneOffset[resizeBarIndex - 1], paneOffset[resizeBarIndex]);
      resizeBar.move(delta);
      this.delta = delta;
      clearSelection();
    }
  }

  handleMouseUp() {
    const { resizeBar, resizeBarIndex } = this.state;
    const { paneOffset } = this.state;
    if (resizeBar) {
      if (paneOffset[resizeBarIndex - 1].align !== 'none') {
        paneOffset[resizeBarIndex - 1].size += this.delta;
        if (paneOffset[resizeBarIndex].align === 'left') {
          paneOffset[resizeBarIndex].start += this.delta;
          paneOffset[resizeBarIndex].size -= this.delta;
        } else if (paneOffset[resizeBarIndex].align === 'right') {
          paneOffset[resizeBarIndex - 1].end -= this.delta;
          paneOffset[resizeBarIndex].size -= this.delta;
        } else {
          paneOffset[resizeBarIndex].start += this.delta;
        }
      } else {
        paneOffset[resizeBarIndex - 1].end -= this.delta;
        paneOffset[resizeBarIndex].size -= this.delta;
      }
      resizeBar.stopResizing();
      this.props.onResize(paneOffset, resizeBar, resizeBarIndex - 1);
      this.setState({
        resizing: false,
        resizeBar: null,
        resizeBarIndex: 0,
        paneOffset,
      }, () => {
        this.setAutoSizePane();
      });
    }
  }

  handleTogglePane(i) {
    this.calculatePaneOffset();
  }

  render() {
    const { prefixCls, className, orientation } = this.props;
    return (
      <div
        onMouseMove={this.handleMouseMove}
        onMouseUp={this.handleMouseUp}
        className={classnames(prefixCls, `${prefixCls}-${orientation}`, className)}
      >
        { this.renderPanes() }
      </div>
    );
  }

  renderPanes() {
    const { prefixCls, children, orientation } = this.props;
    const { paneOffset } = this.state;
    const panes = [];
    let paneProps; let prevPaneSize; let curPaneSize; let disable; let
      hide;
    const paneSizes = this.paneList.map(pane => pane.getCurrentSize());
    React.Children.forEach(children, (Comp, i) => {
      if (i !== 0) {
        if (paneSizes.length > 0) {
          prevPaneSize = paneSizes[i - 1];
          curPaneSize = paneSizes[i];
          hide = curPaneSize === 'collapsed';
          disable = !this.paneList[i - 1].props.resizable || prevPaneSize === 'collapsed';
          if (prevPaneSize === 'collapsed' && i === 1) {
            hide = true;
          }
          // console.log(i, /*disable, hide,*/ prevPaneSize, curPaneSize);
          panes.push(
            <SplitBar
              orientation={orientation}
              prevPaneOffset={paneOffset[i - 1]}
              nextPaneOffset={paneOffset[i]}
              className={
                classnames(
                  `${prefixCls}-split-bar`,
                  `${orientation}`,
                )
              }
              key={`bar-${i - 1}`}
              onResizeActive={(bar, position) => {
                this.setState({
                  resizeBar: bar,
                  resizeBarIndex: i,
                });
                this.resizeOriginPos = position;
              }}
              disable={disable}
              hide={hide}
            />,
          );
        }
      }
      paneProps = {
        prefixCls,
        orientation,
        className: classnames(`${prefixCls}-pane`, `${prefixCls}-pane-${orientation}`),
        ref: pane => (this.paneList[i] = pane),
        key: `pane-${i}`,
        onTogglePane: () => {
          this.handleTogglePane(i);
        },
        parentSplitter: this,
      };
      if (paneOffset[i]) {
        assign(paneProps, {
          offset: paneOffset[i],
        });
      }
      panes.push(React.cloneElement(Comp, paneProps));
    });
    return panes;
  }
}

export default Splitter;
