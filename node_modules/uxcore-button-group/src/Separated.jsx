import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Button from 'uxcore-button';
import Dropdown from 'uxcore-dropdown';
import Menu from 'uxcore-menu';
import classnames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import i18n from './i18n';

/**
 * only consider the button style and how to collapse
 */


class Separated extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    locale: PropTypes.string,
    maxLength: PropTypes.number,
    onClick: PropTypes.func,
    size: PropTypes.string,
  };

  static defaultProps = {
    maxLength: 3,
    locale: 'zh-cn',
    onClick: () => {},
    actionType: 'button',
    size: 'medium',
  };

  static getDerivedStateFromProps = (props, state) => {
    const childrenCount = React.Children.count(props.children);
    if (childrenCount !== state.lastChildrenCount || props.maxLength !== state.lastMaxLength) {
      const newState = {
        lastChildrenCount: childrenCount,
        lastMaxLength: props.maxLength,
      };
      if (React.Children.count(props.children) < parseInt(props.maxLength, 10)) {
        newState.dropdownVisible = false;
      }
      return newState;
    }
    return null;
  }

  constructor(props) {
    super(props);
    this.state = {
      dropdownVisible: false,
      lastChildrenCount: React.Children.count(props.children),
      lastMaxLength: props.maxLength,
    };
    this.handleDropdownVisibleChange = this.handleDropdownVisibleChange.bind(this);
    this.handleMoreClick = this.handleMoreClick.bind(this);
    this.refCallback = [];
  }

  componentDidUpdate() {
    const { children, maxLength } = this.props;
    if (this.state.dropdownVisible
      && parseInt(maxLength, 10) === 1
      && React.Children.count(children) > 1
    ) {
      const dropdownDOMNode = this.dropdownInstance.getPopupDomNode();
      /* eslint-disable react/no-find-dom-node */
      const triggerDOMnode = ReactDOM.findDOMNode(this.triggerInstance);
      /* eslint-enable react/no-find-dom-node */
      if (dropdownDOMNode) {
        dropdownDOMNode.style.minWidth = `${(triggerDOMnode || this.triggerInstance).offsetWidth}px`;
      }
    }
  }

  saveRef(refName) {
    const me = this;
    if (me.refCallback[refName]) {
      return me.refCallback[refName];
    }
    me.refCallback[refName] = (c) => {
      me[refName] = c;
      return false;
    };
    return me.refCallback[refName];
  }

  handleDropdownVisibleChange(visible) {
    const me = this;
    me.setState({
      dropdownVisible: visible,
    });
  }

  handleMenuItemClick(action, e) {
    if (action.props.disabled) {
      return;
    }
    if (action.props.onClick) {
      action.props.onClick(e);
    }
    this.setState({
      dropdownVisible: false,
    });
  }

  handleMoreClick(e) {
    e.preventDefault();
    const me = this;
    me.setState({
      dropdownVisible: !me.state.dropdownVisible,
    });
  }

  renderItem(item, index) {
    const me = this;
    const { actionType, prefixCls, size } = me.props;
    const itemProps = {
      key: index,
      type: item.props.type,
      ghost: item.props.ghost,
      danger: item.props.danger,
      onClick: item.props.disabled ? (() => {}) : item.props.onClick,
      className: classnames({
        [item.props.className]: !!item.props.className,
        [`${prefixCls}-item`]: true,
        [`${prefixCls}-item-first`]: index === 0,
      }),
    };
    if (actionType === 'button') {
      return (
        <Button
          {...itemProps}
          size={size}
          disabled={!!item.props.disabled}
        >
          {item.props.children}
        </Button>
      );
    }
    return (
      <a
        {...itemProps}
        className={classnames(itemProps.className, {
          disabled: !!item.props.disabled,
        })}
      >
        {item.props.children}
      </a>
    );
  }

  renderMore(actions) {
    if (actions.length === 0) {
      return null;
    }
    const me = this;
    const menu = (
      <Menu>
        {actions.map((action, index) => (
          <Menu.Item key={index} disabled={!!action.props.disabled}>
            <a onClick={me.handleMenuItemClick.bind(me, action)}>{action.props.children}</a>
          </Menu.Item>
        ))}
      </Menu>
    );

    const offsetY = 0;
    const dropdownOptions = {
      key: 'icon',
      overlay: menu,
      trigger: ['click'],
      align: {
        offset: [0, offsetY],
      },
      visible: me.state.dropdownVisible,
      overlayClassName: classnames({
        [`${me.props.prefixCls}-more-dropdown`]: true,
        [`${me.props.prefixCls}-more-link-dropdown`]: me.props.actionType === 'link',
      }),
      onVisibleChange: me.handleDropdownVisibleChange,
    };
    const content = (
      <span>
        <span className={`${me.props.prefixCls}-more-text`}>{i18n[me.props.locale].more}</span>
        <i
          className={classnames({
            'kuma-icon': true,
            'kuma-icon-triangle-down': !me.state.dropdownVisible,
            'kuma-icon-triangle-up': me.state.dropdownVisible,
            [`${me.props.prefixCls}-collapsed-icon-active`]: me.state.dropdownVisible,
          })}
        />
      </span>
    );
    const triggerClassName = classnames(`${me.props.prefixCls}-item`, `${me.props.prefixCls}-item-more`);
    if (me.props.actionType === 'button') {
      return (
        <Dropdown {...dropdownOptions}>
          <Button type={'secondary'} size={me.props.size} className={triggerClassName}>{content}</Button>
        </Dropdown>
      );
    }
    return (
      <Dropdown {...dropdownOptions}>
        <a className={triggerClassName} onClick={me.handleMoreClick}>
          {content}
        </a>
      </Dropdown>
    );
  }

  renderHoverMenu() {
    const me = this;
    const { children, actionType, prefixCls, size } = me.props;
    let trigger;
    const options = [];
    React.Children.forEach(children, (child, index) => {
      if (index === 0) {
        const triggerContent = (
          <span>
            <span className={`${me.props.prefixCls}-more-text`}>{child.props.children}</span>
            <i
              className={classnames({
                'kuma-icon': true,
                'kuma-icon-triangle-down': !me.state.dropdownVisible,
                'kuma-icon-triangle-up': me.state.dropdownVisible,
              })}
            />
          </span>
        );
        if (actionType === 'button') {
          trigger = (
            <Button
              type={child.props.type}
              size={size}
              ref={me.saveRef('triggerInstance')}
            >
              {triggerContent}
            </Button>
          );
        } else {
          trigger = (
            <a className={`${prefixCls}-item`} ref={me.saveRef('triggerInstance')}>
              {triggerContent}
            </a>
          );
        }
      }
      options.push(
        <Menu.Item key={index} disabled={!!child.props.disabled}>
          <a
            onClick={me.handleMenuItemClick.bind(me, child)}
          >{child.props.children}</a>
        </Menu.Item>,
      );
    });
    const menu = (
      <Menu>
        {options}
      </Menu>
    );
    const offsetYButtonMap = {
      small: -33,
      medium: -37,
      large: -41,
    };
    const offsetY = actionType === 'button' ? offsetYButtonMap[size] : -30;

    const dropdownOptions = {
      key: 'icon',
      overlay: menu,
      transitionName: '',
      ref: me.saveRef('dropdownInstance'),
      trigger: ['hover'],
      align: {
        offset: [0, offsetY],
      },
      visible: me.state.dropdownVisible,
      overlayClassName: classnames({
        [`${me.props.prefixCls}-more-dropdown`]: true,
        [`${me.props.prefixCls}-more-dropdown-${size}`]: actionType === 'button',
        [`${me.props.prefixCls}-more-link-dropdown`]: actionType === 'link',
      }),
      onVisibleChange: me.handleDropdownVisibleChange,
    };

    return (
      <Dropdown {...dropdownOptions}>
        {trigger}
      </Dropdown>
    );
  }

  render() {
    const me = this;
    const { children, maxLength, actionType, prefixCls, className } = me.props;
    const buttons = [];
    const options = [];
    const rootClassName = classnames(prefixCls, {
      [className]: !!className,
    });
    if (parseInt(maxLength, 10) === 1 && React.Children.count(children) > 1) {
      return (
        <div className={rootClassName}>{me.renderHoverMenu()}</div>
      );
    }
    if (React.Children.count(children) <= parseInt(maxLength, 10)) {
      React.Children.forEach(children, (item, index) => {
        if (index !== 0 && actionType === 'link') {
          buttons.push(<span key={`button${index}`} className={`${me.props.prefixCls}-split-line`}>|</span>);
        }
        buttons.push(me.renderItem(item, index));
      });
    } else {
      React.Children.forEach(children, (item, index) => {
        if (index < parseInt(maxLength, 10) - 1) {
        
          buttons.push(me.renderItem(item, index));
          if (actionType === 'link') {
            buttons.push(<span key={`button${index}`} className={`${me.props.prefixCls}-split-line`}>|</span>);
          }
        } else {
          options.push(item);
        }
      });
    }

    return (
      <div
        className={rootClassName}
      >
        {buttons}
        {me.renderMore(options)}
      </div>
    );
  }
}

Separated.displayName = 'Separated';

polyfill(Separated);

export default Separated;
