import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import { rhythm } from "../utils/typography"

const Footer = () => {
  return (
    <footer style={{ paddingTop: `${rhythm(1 / 4)}` }}>
      © {new Date().getFullYear()}, built with ❤️ by <Link to={`/`}>me</Link>{" "}
      for humans.
    </footer>
  )
}

export default Footer
