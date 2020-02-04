import React from "react"
import { graphql } from "gatsby"

import Image from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

const BlogIndex = ({ data, location }) => {
  const {
    title: siteTitle,
    author,
    social: { twitter },
  } = data.site.siteMetadata

  return (
    <Layout location={location} title={`@${twitter}`}>
      <SEO title={siteTitle} />
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: `auto`,
          marginLeft: `auto`,
          display: `flex`,
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p style={{ textAlign: "justify" }}>
        <br />
        Hi, I am Dragos. <br /> <br />A Software Engineer currently at Mister
        Spex, supporting a fantastic team on building the best place to buy
        eyewear in Europe. On the side, I share my knowledge and passion for
        software with 10+ amazing students at ESMT Berlin. <br />
        <br />
        Born in Romania, raised in Spain now based in beautiful Berlin. This
        diversity of experiences, people, and perspectives marked my career. I
        hold a Bachelor in Aerospace Engineering with a minor in Propulsion
        Systems. <br />
        <br />
        Building software products, teams, and companies has been my fascination
        from a young age. On the way, I had the opportunity to lead different
        software startups, sometimes a Co-founder. Always with a strong focus on
        delivery and results. <br />
        <br />
        It's been quite a ride, and I love every minute of it. As for the
        reader, work with people you admire, focus on contribution, and never
        settle. <br />
        <br />
        <br />
        Until the next one :) <br />
        Dragos
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
        fixed(width: 128, height: 128) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
