import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import "typeface-pt-sans"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const BlogIndex = ({ data, location }) => {
  const {
    title: siteTitle,
    author,
    social: { twitter, linkedin, github },
  } = data.site.siteMetadata

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
        imgStyle={
          {
            // borderRadius: `50%`,
          }
        }
      />
      <h1>Hi, I'm Dragos.</h1>
      <p>Self-taught Software Developer and Mentor.</p>
      <p>Currently building <a href="https://www.codewithdragos.com/">CodeWithDragos.</a></p>


      <br />
      <p>
        More of me on:{" "}
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          Linkedin
        </a>{" "}
        ·{" "}
        <a href={twitter} target="_blank" rel="noopener noreferrer">
          Twitter
        </a>{" "}
        ·{" "}
        <a href={github} target="_blank" rel="noopener noreferrer">
          Github
        </a>
      </p>
      <br />
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
          linkedin
          github
        }
      }
    }
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
