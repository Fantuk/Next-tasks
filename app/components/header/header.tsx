import React from 'react'

import Navigation from './navigation/navigation'

import styles from './header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
        <Navigation/>
    </div>
  )
}

export default Header