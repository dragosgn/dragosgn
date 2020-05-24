import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

export default () => (
  <footer style={{ paddingTop: `${rhythm(1 / 4)}` }}>
    © {new Date().getFullYear()}, built with ❤️ in Berlin by{" "}
    <Link to={`/`}>me</Link> for humans using{" "}
    <a
      href="https://www.gatsbyjs.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Gatsby.js
    </a>
    .
  </footer>
)
