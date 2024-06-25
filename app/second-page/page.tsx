import React from 'react'

import Header from '../components/header/header'
import Content from '../components/content/content'
import Footer from '../components/footer/footer'

import styles from '../page.module.css'

const page = () => {
  return (
    <div className={styles.page}>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default page