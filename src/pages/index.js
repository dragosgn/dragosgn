import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import "typeface-pt-sans"
import LogRocket from "logrocket"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

LogRocket.init("grfjq9/personal")

const BlogIndex = ({ data, location }) => {
  const { title: siteTitle, author } = data.site.siteMetadata

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={author} />
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: `auto`,
          marginLeft: `auto`,
          borderRadius: `100%`,
          display: "relative",
          marginBottom: rhythm(2),
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>Hi, I am Dragos.</p>

      <p style={{ textAlign: "justify" }}>
        A Software Engineer currently at Mister Spex, supporting a fantastic
        team on building the best place to buy eyewear in Europe. On the side, I
        share my knowledge and passion for software with 10+ amazing students at
        ESMT Berlin.
      </p>
      <p style={{ textAlign: "justify" }}>
        Born in Romania, raised in Spain now based in beautiful Berlin. This
        diversity of experiences, people, and perspectives marked my career. I
        hold a Bachelor in Aerospace Engineering with a minor in Propulsion
        Systems.
      </p>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
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
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 220, height: 220) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
