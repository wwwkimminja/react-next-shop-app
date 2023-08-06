import React from 'react'
import styles from './Divider.module.scss'

function Divider({
  space=22,
  color="#ccc",
  ...restProps
}) {

  const style={
    marginTop:space,
    marginBottom:space,
    background:color
  }
  return (
    <div className={styles.line} style={style}/>

  )
}

export default Divider