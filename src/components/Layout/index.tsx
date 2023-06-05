import * as React from "react"

import Header from "../Header"
import Footer from "../Footer"
import Head from "../../containers/head"
import "../../styles.css"

interface LayoutProps {
  title: string
  description?: string
  image?: { id: string; url: string }
  children: any
  showBackgroundImageHeader: Boolean
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <Head {...props} />
      {props.showBackgroundImageHeader === false && <Header />}
      {props.children}
      <Footer />
    </>
  )
}

export default Layout
