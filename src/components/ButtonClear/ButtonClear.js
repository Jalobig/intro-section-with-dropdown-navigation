import React from 'react'
import classes from './ButtonClear.module.scss'

const ButtonClear = (props) => {
  return (
    <button className={classes.button}>{props.children}</button>
  )
}

export default ButtonClear