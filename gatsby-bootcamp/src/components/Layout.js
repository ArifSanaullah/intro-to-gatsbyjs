import React from "react"
import Footer from "./Footer"
import Header from "./Header"

import "../styles/index.scss"
import styles from "./layout.module.scss"

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.content} >
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
