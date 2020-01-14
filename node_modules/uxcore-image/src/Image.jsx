/**
 * Image Component for uxcore
 * @author eternalsky
 *
 * Copyright 2017-2018, Uxcore Team, Alinw.
 * All rights reserved.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import addEventListener from 'rc-util/lib/Dom/addEventListener';
import { isDocumentLoaded, handleImageSrc } from './utils';
import adapter from './cdnAdapter';

const DEFAULT_TRANS_PIC = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='1000' height='1000' style=''%3E %3Crect fill='transparent' width='100%25' height='100%25' x='0' y='0' stroke='none'/%3E %3C/svg%3E";


class Image extends React.Component {
  static displayName = 'Image';

  static propTypes = {
    src: PropTypes.string,
    adapterType: PropTypes.string,
    className: PropTypes.string,
    prefixCls: PropTypes.string,
    defaultPic: PropTypes.string,
    showDefaultPicDelay: PropTypes.number,
    enableUrlAdapter: PropTypes.bool,
    style: PropTypes.object,
    height: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    width: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    lazyload: PropTypes.bool,
  };

  static defaultProps = {
    src: '',
    adapterType: '',
    className: '',
    prefixCls: 'uxcore-image',
    defaultPic: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='1000' height='1000' style=''%3E %3Crect width='100%25' height='100%25' x='0' y='0' fill='%23f2f3f5' stroke='none'/%3E %3C/svg%3E",
    showDefaultPicDelay: 200,
    enableUrlAdapter: true,
    style: {},
    height: undefined,
    width: undefined,
    lazyload: true,
  };

  constructor(props) {
    super(props);
    this.state = {
      renderSrc: handleImageSrc(props, adapter),
      prevSrc: props.src,
      prevEnableUrlAdapter: props.enableUrlAdapter,
      prevAdapterType: props.adapterType,
      loaded: !props.lazyload || isDocumentLoaded(),
      showDefault: !props.lazyload,
    };
  }

  componentDidMount() {
    const { showDefaultPicDelay, lazyload } = this.props;
    if (lazyload) {
      if (!isDocumentLoaded()) {
        this.loadListener = addEventListener(window, 'load', () => {
          setTimeout(() => {
            this.setState({
              loaded: true,
            });
          }, 0);
        });
      }

      this.delayTimer = setTimeout(() => {
        this.setState({
          showDefault: true,
        });
      }, showDefaultPicDelay);
    }
  }

  componentWillUnmount() {
    if (this.loadListener) {
      this.loadListener.remove();
    }
    if (this.delayTimer) {
      clearTimeout(this.delayTimer);
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.src !== state.prevSrc) {
      return {
        renderSrc: handleImageSrc(props, adapter),
        prevSrc: props.src,
      };
    }
    return null;
  }

  render() {
    const {
      className, prefixCls, defaultPic, ...others
    } = this.props;
    const { renderSrc, loaded, showDefault } = this.state;

    let imgSrc = showDefault ? defaultPic : DEFAULT_TRANS_PIC;
    if (loaded) {
      imgSrc = renderSrc;
    }
    const cls = classnames(prefixCls, {
      [className]: !!className,
    });

    Object.keys(Image.propTypes).forEach((key) => {
      delete others[key];
    });


    return (
      <img
        alt=""
        {...others}
        className={cls}
        src={imgSrc}
      />
    );
  }
}

Image.adapter = adapter;

polyfill(Image);

export default Image;
