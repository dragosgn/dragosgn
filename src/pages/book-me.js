import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Checkout from "../components/checkout"

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby e-commerce site.</p>
    <Checkout />
  </Layout>
)

export default IndexPage
