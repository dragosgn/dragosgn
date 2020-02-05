import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TranCancelled = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Transaction canceled" />
      <h1>Transaction canceled</h1>
      <p>Transaction canceled... so sad.</p>
    </Layout>
  )
}

export default TranCancelled

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
