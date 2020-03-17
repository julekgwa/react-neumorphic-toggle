import PropTypes from 'prop-types';

import React from 'react';

import {
  Themes 
} from '../constants/index';

import {
  SwitchContainer 
} from '../elements/SwitchContainer';

export const Switch = ({ theme, disabled, checked, ...props }) => {

  theme =
    typeof theme === 'string' && Themes[theme]
      ? Themes[theme]
      : theme
        ? theme
        : Themes.light;

  return (
    <SwitchContainer theme={theme}>
      <div className='toggle'>
        <input
          disabled={disabled}
          checked={checked}
          className='toggle-state'
          type='checkbox'
          {...props}
        />
        <div className='indicator'></div>
      </div>
    </SwitchContainer>
  );

};

Switch.propTypes = {
  theme: PropTypes.object,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
}
