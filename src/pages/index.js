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
      <p style={{ textAlign: "justify" }}>
        Building software products, teams, and companies has been my fascination
        from a young age. On the way, I had the opportunity to lead different
        software startups, sometimes as a Co-founder. Always with a strong focus
        on delivery and results.
      </p>
      <p style={{ textAlign: "justify" }}>
        It's been quite a ride, and I love every minute of it. As for the
        reader, work with people you admire, focus on contribution, and never
        settle.
      </p>
      <p>
        You can see more of me here:{" "}
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
        fixed(width: 220, height: 220) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
