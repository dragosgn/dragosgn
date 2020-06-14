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
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <h3>Hi, I am Dragos.</h3>
      <p style={{ textAlign: "justify" }}>
        I am a self-taught Software Developer at Mister Spex. As a mentor, I
        help professionals in their 30ies and 40ies to get a job as a developer
        in 3-6 months, without a degree or Bootcamp. The catch? I've done it
        before. Bankrupt before 23, when my consulting company went burst, I
        went on and built a career in the industry and ended up joining one of
        Europe's top tech companies.
      </p>
      <p style={{ textAlign: "justify" }}>
        Last year, I've mentored more than 20 developers on their journey, many
        of them getting full-time jobs. I specialized in 'outsiders' wanting to
        get a job as a developer. I help them gain skills relevant to the
        current market using a clear leaning plan, live coding sessions, and
        industry expertise. I then help them get interviews and pass technical
        challenges and finally get hired.
      </p>
      <p style={{ textAlign: "justify" }}>
        I use a 'hands-on' approach focusing on both practical and theoretical
        aspects of software development. With the right mindset, a clear
        learning plan, dedication, and guidance from someone that has "been
        there and done that", anyone can get a job in tech.
      </p>
      <p style={{ textAlign: "justify" }}>
        Since then, I've made my way up. After exploring Berlin's startup
        ecosystem, I ended up joining one of Europe's top tech companies -
        Mister Spex. Passionate about leadership, I perform best at the
        intersection between people, business, and technology.
      </p>
      <p style={{ textAlign: "justify" }}>
        It's been quite a ride, and I love every minute of it. As for the
        reader, work with people you admire and never settle.
      </p>
      <br></br>
      <p style={{ textAlign: "justify" }}>
        ⇒ For mentoring, book me{" "}
        <a href=" https://www.mentoring-club.com/the-mentors/dragos-nedelcu">
          here.
        </a>
      </p>
      <p style={{ textAlign: "justify" }}>
        ⇒ I am always looking for projects with an impact. Looking for a tech
        co-founder? Drop me a line: dragosgn@gmail.com{" "}
        <span role="img">🚀</span>
      </p>

      <p>
        ⇒ More of me on:{" "}
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
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
