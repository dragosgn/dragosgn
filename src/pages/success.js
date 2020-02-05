import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TranSuccess = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Transaction succesful" />
      <h1>Transaction succesful</h1>
      <p>Thank you for you trust :)</p>
    </Layout>
  )
}

export default TranSuccess

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
