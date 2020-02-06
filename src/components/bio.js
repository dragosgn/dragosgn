/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

const Root = styled.div`
  display: flex;
  align-items: center;
  padding: ${rhythm(1 / 4)};
  justify-content: start;
  align-content: center;
  align-items: center;
`

const ImageWrapper = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  margin-right: ${rhythm(1 / 2)};
`

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  return (
    <Root>
      <ImageWrapper>
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author}
          style={{
            borderRadius: `100%`,
            width: "100%",
            borderRadius: "100%",
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      </ImageWrapper>
      <p style={{ margin: "0" }}>
        <strong>{author}</strong> <br />
      </p>
    </Root>
  )
}

export default Bio
