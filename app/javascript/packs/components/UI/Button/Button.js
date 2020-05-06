import React from 'react';
import { Primary, Secondary, Warning, Success, Danger } from './Button.module.scss';


const button = ({ 
  innerText, callback, activeClass 
}) => {
  let boton = null;
  let buttonClass = null;
  if (activeClass === 'primary') buttonClass = Primary;
  if (activeClass === 'secondary') buttonClass = Secondary;
  if (activeClass === 'warning') buttonClass = Warning;
  if (activeClass === 'success') buttonClass = Success;
  if (activeClass === 'danger') buttonClass = Danger;

  if (callback) {
    boton = (<div className={buttonClass} onClick={callback}>
      {innerText}
    </div>)
  } else {
    boton = (<div className={buttonClass}>
      {innerText}
    </div>)
  }
  return boton;
}

export default button;