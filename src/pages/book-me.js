import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Checkout from "../components/checkout"

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi there</h1>
    <p>Book a OneToOne session with me :)</p>
    <Checkout />
  </Layout>
)

export default IndexPage
