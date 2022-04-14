import React from 'react'

import { ButtonBack } from './index'

const Button = (props) => (
  <ButtonBack alt={props.alt} form={props.form} disabled={props.disabled}>{props.children}
  </ButtonBack>
);

export default Button
