import React from 'react'
import styles from './Icon.module.css';
            
const IconCard = ({icon = "fa fa-magic", detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."}) => {
  return (
    <div className={styles.icon}>
        <i className={icon}></i>
        <h3>Lorem ipsum</h3>
        <p>{detail}</p>
    </div>
  )
}

export default IconCard