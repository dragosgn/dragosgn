import React from "react"

import Layout from "../components/layout"
// import SEO from "../components/seo"
// import Checkout from "../components/checkout"

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <h1>Hi there</h1>
    <p>Book a 1:1 session with Dragos :)</p>
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/dragosgn/book-dragos"
      style={{ minWidth: "320px", height: "630px" }}
    ></div>
    <script
      type="text/javascript"
      src="https://assets.calendly.com/assets/external/widget.js"
    ></script>
  </Layout>
)

export default IndexPage
