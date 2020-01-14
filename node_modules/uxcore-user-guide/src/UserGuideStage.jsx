/*
 * @Author: tongbin.xtb
 * @Date: 2018-01-03 17:34:28
 * @Last Modified by: tongbin.xtb
 * @Last Modified time: 2018-02-24 19:32:32
 */

import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from 'uxcore-tooltip';
import Button from 'uxcore-button';
import Icon from 'uxcore-icon';
import CheckboxGroup from 'uxcore-checkbox-group';
import scrollToTop from './scrollToTop';

const texts = {
  'zh-cn': {
    done: '我知道了',
    final: '立即体验',
    next: '下一步',
    prev: '上一步',
    skip: '跳过',
    learnMore: '了解更多',
    noRemind: '不再提醒',
  },
  'en-us': {
    done: 'Got it',
    next: 'next',
    final: 'Getting started',
    skip: 'Skip',
    learnMore: 'Learn more',
    noRemind: 'Do not remind',
  },
};

const getCenter = function getCenter(s) {
  let center = {};
  if (s.type === 'HTMLElement' || s.type === 'HTMLElementMaker' || s.type === 'ReactComponent') {
    let { dom } = s;
    if (s.type === 'HTMLElementMaker') {
      if (typeof s.getDom === 'function') {
        dom = s.getDom();
      }
    }
    if (!(dom instanceof HTMLElement)) {
      return {
        x: 0, y: 0, w: 0, h: 0,
      };
    }
    const {
      top, left, width: w, height: h,
    } = dom.getBoundingClientRect();
    center = {
      x: left + w / 2,
      y: top + h / 2,
      w,
      h,
    };
    center.y += window.scrollY;
  }
  return center;
};

class UserGuideStage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0,
      skipChecked: props.skipChecked || false,
    };
  }

  componentDidMount() {
    this.nextStep(-1);
  }

  nextStep(index) {
    const { designMode, steps } = this.props;
    if (designMode) {
      return;
    }
    let center = { x: 0, y: 0 };
    if (steps[index + 1]) {
      center = getCenter(steps[index + 1]);
    }
    let to;
    let height = center.h;
    if (center.x - 319 - center.w / 2 < 0) {
      height += 200;
    }
    const { innerHeight } = window;
    if (innerHeight > height) {
      to = center.y - center.h / 2 - (innerHeight - height) / 2;
    } else {
      to = center.y - center.h / 2 + height - innerHeight;
    }
    if (to < 0) {
      to = 0;
    }
    scrollToTop(to);
    this.setState({
      currentStep: index + 1,
    }, () => {
      const { steps: propSteps, done } = this.props;
      const { currentStep } = this.state;
      if (currentStep >= propSteps.length) {
        done();
      }
    });
  }

  handleNoMindChange() {
    const { skipChecked } = this.state;
    this.setState({
      skipChecked: !skipChecked,
    }, () => {
      const { onAssistClick, steps } = this.props;
      const { currentStep } = this.state;
      onAssistClick(steps[currentStep]);
    });
  }

  renderSkipText() {
    const {
      assistType, locale, prefixCls, onAssistClick, steps,
    } = this.props;
    const { currentStep, skipChecked } = this.state;
    switch (assistType) {
      case 'SKIP':
        return (
          <span
            role="button"
            tabIndex={-1}
            className={`${prefixCls}-skip-text`}
            onClick={() => this.nextStep(steps.length - 1)}
            onKeyDown={() => {}}
          >
            {texts[locale].skip}
          </span>
        );
      case 'LEARN_MORE':
        return (
          <span
            role="button"
            tabIndex={-1}
            className={`${prefixCls}-skip-text`}
            onClick={() => onAssistClick(steps[currentStep])}
            onKeyDown={() => {}}
          >
            {texts[locale].learnMore}
          </span>
        );
      case 'NO_REMIND':
        return (
          <CheckboxGroup
            value={[skipChecked ? '1' : '0']}
            onChange={this.handleNoMindChange.bind(this)}
            className={`${prefixCls}-skip-checkbox`}
          >
            <CheckboxGroup.Item text={texts[locale].noRemind} value="1" />
          </CheckboxGroup>
        );
      default:
        return undefined;
    }
  }

  renderIcon(step) {
    const { prefixCls } = this.props;
    if (!step.icon) {
      return false;
    }
    if (typeof step.icon === 'string') {
      return (
        <Icon
          usei
          name={step.icon}
          className={`${prefixCls}-step-hint-icon`}
        />
      );
    }
    return step.icon;
  }

  render() {
    let { finalText } = this.props;
    const {
      steps, locale, prefixCls, designMode,
    } = this.props;
    const {
      currentStep,
    } = this.state;
    const last = steps.length - 1;
    const multiple = steps.length > 1;
    finalText = finalText || (multiple
      ? texts[locale].final : texts[locale].done);
    return (
      <div className={`${prefixCls}-holder`}>
        {steps.map((s, index) => {
          const center = getCenter(s);
          const visible = (currentStep === index) || designMode;
          const hint = (
            <div
              className={`${prefixCls}-step-hint`}
            >
              <div className={`${prefixCls}-step-hint-wrp`}>
                {this.renderIcon(s)}
                <div>
                  {s.title && (
                    <div className={`${prefixCls}-step-hint-title`}>
                      {s.title}
                    </div>
                  )}
                  {(!s.contentType || s.contentType === 'TEXT') && (
                    <div className={`${prefixCls}-step-hint-desc`}>{s.content}</div>
                  )}
                  {s.contentType === 'IMAGE' && (
                    <div className={`${prefixCls}-step-hint-desc`}>
                      <img role="presentation" src={s.content} alt="" />
                    </div>
                  )}
                  {s.contentType === 'VIDEO' && (
                    <div className={`${prefixCls}-step-hint-desc`}>
                      <video
                        controls="true"
                        src={s.content}
                        poster={s.poster}
                        preload="auto"
                      >
                        <track kind="captions" />
                      </video>
                    </div>
                  )}
                </div>
              </div>
              <div className={`${prefixCls}-hint-bottom`}>
                {this.renderSkipText()}
                <Button
                  type="primary"
                  size="small"
                  onClick={() => { this.nextStep(index); }}
                >
                  {index === last ? finalText : texts[locale].next}
                </Button>
                {
                  index > 0 && (
                    <Button
                      type="secondary"
                      size="small"
                      onClick={() => { this.nextStep(index - 2); }}
                    >
                      {texts[locale].prev}
                    </Button>
                  )
                }
              </div>
            </div>
          );
          return (
            <Tooltip
              overlay={hint}
              placement="bottomRight"
              trigger={['click']}
              visible={visible}
              overlayClassName={`${prefixCls}-stage-step-hint`}
              key={s.step}
            >
              <div
                key={s.step}
                className={`${prefixCls}-breathing-point${visible ? ''
                  : ` ${prefixCls}-hidden`}`}
                style={{
                  top: (center.y + center.h / 2 - 20) || 0,
                  left: (center.x + center.w / 2 - 20) || 0,
                }}
              >
                <div className={`${prefixCls}-big`} />
                <div className={`${prefixCls}-small`} />
              </div>
            </Tooltip>
          );
        })}
      </div>
    );
  }
}

UserGuideStage.defaultProps = {
  steps: [],
  done: () => {},
  locale: 'zh-cn',
  designMode: false,
  prefixCls: 'kuma-user-guide',
  assistType: undefined,
  onAssistClick: () => {},
  skipChecked: false,
  finalText: undefined,
};

UserGuideStage.propTypes = {
  steps: PropTypes.array,
  done: PropTypes.func,
  locale: PropTypes.string,
  finalText: PropTypes.string,
  designMode: PropTypes.bool,
  prefixCls: PropTypes.string,
  assistType: PropTypes.string,
  onAssistClick: PropTypes.func,
  skipChecked: PropTypes.bool,
};

UserGuideStage.displayName = 'UserGuideStage';

module.exports = UserGuideStage;
