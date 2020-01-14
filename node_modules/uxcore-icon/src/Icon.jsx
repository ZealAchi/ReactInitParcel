/**
 * Icon Component for uxcore
 * @author eternalsky
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */
import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class Icon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      name, className, usei, ...otherProps
    } = this.props;
    const iconProps = {
      className: classnames(`uxcore-icon uxicon-${name}`, {
        [className]: !!className,
      }),
      ...otherProps,
    };
    if (usei) {
      return <i {...iconProps} />;
    }
    return (
      <icon {...iconProps} />
    );
  }
}

Icon.defaultProps = {
  name: 'shezhi',
  usei: false,
  className: '',
};


// http://facebook.github.io/react/docs/reusable-components.html
Icon.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  usei: PropTypes.bool,
};

Icon.displayName = 'Icon';

export default Icon;
