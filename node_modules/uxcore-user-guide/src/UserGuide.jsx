/**
 * UserGuide Component for uxcore
 * @author buzhou
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */
const React = require('react');
const ReactDOM = require('react-dom');
const UserGuideStage = require('./UserGuideStage');
const scrollToTop = require('./scrollToTop');

const guideMap = {};

// HOC, 不是一个react component
export default class UserGuide {
  constructor(key, config) {
    this.key = key;
    this.locale = (config && config.locale) || 'zh-cn';
    this.prefixCls = (config && config.prefixCls) || 'kuma-user-guide';
    this.className = (config && config.className) || '';
    // 默认 true,
    this.isBlocking = config && config.isBlocking;
    if (this.isBlocking === undefined) {
      this.isBlocking = true;
    }
    this.assistType = config && config.assistType;
    this.onAssistClick = config && config.onAssistClick;
    this.onComplete = config && config.onComplete;
  }

  addUserGuide(guideProps) {
    const { step = 0 } = guideProps;
    if (!this.steps) {
      this.steps = [];
    }
    this.steps[step] = guideProps || {};
    // if (WrappedComponent instanceof HTMLElement) {
    //   this.steps[step].dom = WrappedComponent;
    //   return WrappedComponent;
    // }
    if (guideProps.type === 'ReactComponent') {
      return props => (
        <guideProps.dom
          {...props}
          ref={(comp) => {
            this.steps[step].dom = comp;
          }}
        />
      );
    }
    return false;
  }

  start(designMode) {
    // key must specified
    const steps = (this.steps || []).filter(i => i);
    const dom = document.createElement('div');
    dom.className = `${this.prefixCls}-stage${designMode ? ' design-mode' : ''}${this.className
      ? ` ${this.className}` : ''}${this.isBlocking ? ' isBlocking' : ''}`;
    document.body.appendChild(dom);
    const overflow = document.body.style.overflowY;
    if (this.isBlocking) {
      document.body.style.overflowY = 'hidden';
    }
    scrollToTop(0);
    steps.forEach((step) => {
      const s = step;
      s.assistType = this.assistType;
    });
    this.stop = function stop(callOnComplete = true) {
      ReactDOM.unmountComponentAtNode(dom);
      document.body.removeChild(dom);
      document.body.style.overflowY = overflow;
      this.drop();
      if (typeof this.onComplete === 'function' && callOnComplete) {
        this.onComplete();
      }
    };
    ReactDOM.render(<UserGuideStage
      steps={steps}
      assistType={this.assistType}
      onAssistClick={this.onAssistClick}
      locale={this.locale}
      prefixCls={this.prefixCls}
      className={this.className}
      done={() => this.stop()}
      designMode={designMode}
    />, dom);
  }

  drop() {
    // 防止内存泄漏
    delete guideMap[this.key];
  }
}

UserGuide.getWithKey = function getWithKey(key, config) {
  if (guideMap[key]) {
    return guideMap[key];
  }
  guideMap[key] = new UserGuide(key, config);
  return guideMap[key];
};

module.exports = UserGuide;
