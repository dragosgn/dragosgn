import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

export default () => (
  <footer style={{ paddingTop: `${rhythm(1 / 4)}` }}>
    © {new Date().getFullYear()}, built with ❤️ by <Link to={`/`}>me</Link> for
    humans.
  </footer>
)
