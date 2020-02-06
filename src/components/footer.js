import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import { rhythm } from "../utils/typography"

const Footer = () => {
  const {
    site: {
      siteMetadata: { author },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
            social {
              twitter
            }
          }
        }
      }
    `
  )

  return (
    <footer style={{ paddingTop: `${rhythm(1 / 4)}` }}>
      © {new Date().getFullYear()}, built with ❤️ by{" "}
      <Link to={`/`}>{author}</Link> for humans.
    </footer>
  )
}

export default Footer
