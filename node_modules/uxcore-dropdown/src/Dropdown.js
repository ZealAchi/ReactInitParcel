import RcDropdown from 'rc-dropdown';
import assign from 'object-assign';

class Dropdown extends RcDropdown {}

Dropdown.displayName = 'uxcore-dropdown';
Dropdown.propTypes = RcDropdown.propTypes;
Dropdown.defaultProps = assign({}, RcDropdown.defaultProps, {
  prefixCls: 'kuma-dropdown',
  transitionName: 'dropdownSlideUp',
});

export default Dropdown;
