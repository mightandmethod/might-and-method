import React, {PropTypes} from 'react';

const Tab = (props) => {
  return (
    <li className="tab">
      <a href="javascript:(0);" className={`tab-link ${props.linkClassName} ${props.isActive ? 'active' : ''}`}
        onClick={(event) => {
          event.preventDefault();
          props.onClick(props.tabIndex);
        }}>
        {props.linkText}
      </a>
    </li>
  )
}

export default Tab

Tab.propTypes = {
  onClick      : PropTypes.func,
  tabIndex     : PropTypes.number,
  isActive     : PropTypes.bool,
  linkText     : PropTypes.string.isRequired,
  linkClassName: PropTypes.string.isRequired
};