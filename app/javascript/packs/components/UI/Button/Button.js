import React from 'react';
import { 
  Primary,
  Secondary,
  Warning,
  Success,
  Danger
} from './Button.module.scss';

const BUTTON_CLASSES = {
  primary: Primary,
  secondary: Secondary,
  warning: Warning,
  success: Success,
  danger: Danger
}

const button = ({ 
  children, callback, activeClass 
}) => {
  const button = (
    <div className={BUTTON_CLASSES[`${activeClass}`]} onClick={callback ? callback : ''}>
      {children}
    </div>
  );
  return button;
}

export default button;