import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { scale, rhythm } from "../utils/typography"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BookWrapper = styled.div`
  display: flex;
  align-items: center;
  display: flex;
  justify-content: start;
  background: #ffffff;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  margin: 2rem;
  transition: all 100ms ease-in-out;
  padding: 0.5rem;
  margin: 0.5rem;
  border: 1px solid #ccc;
`
const BookAvatar = styled.img`
  margin: 0;
  border-radius: 3px;
`
const Description = styled.div`
  padding: ${rhythm(1 / 2)};
`
const Title = styled.p`
  margin: 0 0 12px 0;
  padding: 0;
`

const BookBox = styled.div`
  min-width: 100px;
  display: flex;
  align-items: center;
  align-content: center;
`

const TranCancelled = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const books = data.goodreadsShelf.reviews.map(({ book }) => {
    return {
      title: book.title,
      imgUrl: book.imageUrl,
    }
  })

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Reading right now" />
      <h3 style={{ ...scale(1 / 2) }}>Must reads:</h3>
      <div style={{ marginBottom: "2rem", marginTop: "1rem" }}>
        {books.map(({ title, imgUrl }) => {
          return (
            <BookWrapper key={title}>
              <BookBox>
                <BookAvatar src={imgUrl} alt={title} />
              </BookBox>
              <Description>
                <Title style={{ ...scale(0.1) }}>{title}</Title>
              </Description>
            </BookWrapper>
          )
        })}
      </div>
    </Layout>
  )
}

export default TranCancelled

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    goodreadsShelf {
      id
      shelfName
      reviews {
        reviewID
        rating
        votes
        spoilerFlag
        dateAdded
        dateUpdated
        body
        book {
          bookID
          isbn
          isbn13
          textReviewsCount
          uri
          link
          title
          titleWithoutSeries
          imageUrl
          smallImageUrl
          largeImageUrl
          description
        }
      }
    }
  }
`
