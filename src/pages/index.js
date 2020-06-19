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
      <h3>Hi, I am Dragos.</h3>
      <p style={{ textAlign: "justify" }}>
        Self-taught Software Developer and Mentor. <br />
        <br /> As a mentor, I coach professionals in their 30ies and 40ies to
        get a job as a developer in 3-6 months, without a degree or a Bootcamp.
        So far, I've mentored 20+ developers on their journey, most of them got
        full-time jobs.
        <br />
        <br />
        The catch? I've done it before. After my consulting company went
        bankrupt, I've built a career in the software industry and ended up
        joining one of Europe's top tech companies.
      </p>
      <p style={{ textAlign: "justify" }}>
        I specialize in 'outsiders' wanting to get a job as a developer. I help
        them gain skills relevant to the current market using a clear leaning
        plan, live coding sessions, and industry expertise.
        <br />
        <br /> Afterwards, I help them get interviews, pass technical challenges
        and finally get hired. My 'hands-on' approach focuses on both practical
        and theoretical aspects of software development.
      </p>

      <p style={{ textAlign: "justify" }}>
        I 've "been there and done that" and I believe that with the right
        mindset and guidance, anyone can get a job in tech.{" "}
        <span role="img"> 🚀</span>
      </p>
      <br />
      <p style={{ textAlign: "justify" }}>
        👉🏻 You can book a quick call with me
        <a
          href="https://calendly.com/dragosgn/book-dragos"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          here.
        </a>
      </p>
      <br />
      <br />
      {/* <p style={{ textAlign: "justify" }}>
        👉🏻 I am always looking for projects with an impact. Looking for a tech
        co-founder? Drop me a line: dragosgn@gmail.com.
      </p> */}
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
