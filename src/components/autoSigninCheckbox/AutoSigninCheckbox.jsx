import React from 'react'
import Checkbox from '../checkbox/Checkbox'
import Tooltip from '../tooltip/Tooltip'
import styles from './AutoSignInCheckbox.module.scss'

const AutoSignInCheckbox = ({
  label='Auto Sign In',
  checked,
  disabled,
  orientation='top',
  message='Please use it only on your device to protect your private information',
  onChange,
  ...restProps
}) => {
  return (
    <div className={styles.wrapper}>
      <Checkbox 
      label={label}
      checked={checked}
      disabled={disabled}
      onChange={onChange}
      {...restProps}
      /> 
      {
        checked &&(
          <Tooltip/>
        )
      }
    </div>
  )
}

export default AutoSignInCheckbox