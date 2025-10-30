import React from 'react'
import styles from './Icon.module.css';            
const IconCard = ({icon = "fa fa-magic"}) => {
  return (
    <div className={styles.icon}>
        <i className={icon}></i>
        <h3>Lorem ipsum</h3>
        <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
    </div>
  )
}

export default IconCard