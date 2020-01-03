
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Popover from 'uxcore-popover';

import Badge from 'uxcore-badge';
import Overlay from './Overlay';
import { IconButton, Badge as BadgeM } from '@material-ui/core';
import { NotificationsIcon } from '../../../helpers/ConstRouters';

class NoticeIcon extends React.Component {
  static defaultProps = {
    prefixCls: 'kuma-notice-icon',
    icon: 'xiaoxitixingfull',
    title: 'Titulo',
    dot: false,
    count: 0,
    overflowCount: 99,
    placement: 'bottomRight',
    trigger: 'hover',
    emptyText: 'No hay notificaciones',
    bottomAction: { text: 'Accion', action: () => { } },
    enablePopover: false,
    themeType: 'default',
  };

  static propTypes = {
    ...Overlay.propTypes,
    overlayClassName: PropTypes.string,
    dot: PropTypes.bool,
    count: PropTypes.number,
    overflowCount: PropTypes.number,
    placement: PropTypes.oneOf(['top', 'bottom', 'left', 'right',
      'topLeft', 'bottomLeft', 'leftTop', 'rightTop', 'topRight', 'bottomRight',
      'leftBottom', 'rightBottom']),
    trigger: PropTypes.oneOf(['hover', 'click']),
    onVisibleChange: PropTypes.func,
    className: PropTypes.string,
    enablePopover: PropTypes.bool,
    onIconClick: PropTypes.func,
    themeType: PropTypes.string,
  };

  static displayName = 'NoticeIcon';

  constructor(props) {
    super(props);
    this.state = {
    };
  }
  onItemClick = () => {
    const { trigger, enablePopover, onIconClick } = this.props;
    if (!(trigger === 'click' && enablePopover) && onIconClick) {
      onIconClick();
    }
  }

  renderWithPopover() {
    const { prefixCls, placement, trigger, onVisibleChange, overlayClassName } = this.props;
    return (
      <Popover
        overlay={(
          <Overlay
            {...this.props}
          />
        )}
        overlayClassName={classnames(`${prefixCls}-popover`, overlayClassName)}
        placement={placement}
        trigger={trigger}
        {...(onVisibleChange) ? { onVisibleChange } : {}}
      >
        {this.renderBadge()}
      </Popover>
    );
  }

  renderBadge() {
    const { prefixCls, className, dot, count, overflowCount,
      icon, trigger, onIconClick, themeType } = this.props;
    const cursorClass = (trigger === 'click' || onIconClick) ? `${prefixCls}-cursor` : '';
    const themeClass = (themeType === 'dark') ? `${prefixCls}-dark` : '';
    return (
      <span className={classnames(`${prefixCls}-badge`, className, cursorClass, themeClass)} onClick={this.onItemClick}>
        <Badge
          dot={dot}
          count={count}
          overflowCount={overflowCount}
          themeType={themeType}
        >
          <IconButton aria-label="show 17 new notifications" color="inherit">
            <BadgeM badgeContent={17} color="secondary">
              <NotificationsIcon />
            </BadgeM>
          </IconButton>
          {/* <Icon name={icon} className={`${prefixCls}-img`} usei /> */}
        </Badge>
      </span>
    );
  }

  render() {
    return (
      this.props.enablePopover ? this.renderWithPopover() : this.renderBadge()
    );
  }
}

export default NoticeIcon;
