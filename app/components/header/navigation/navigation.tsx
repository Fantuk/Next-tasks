import React from 'react'

import Link from 'next/link'

import styles from './navigation.module.css'

function Navigation() {
  return (
    <div className={styles.navigation}>
        <Link className={styles.link} href='../'>Back</Link>
        <Link className={styles.link} href='second-page/'>Second page</Link>
        <Link className={styles.link} href='third-page/'>Third page</Link>
    </div>
  )
}

export default Navigation