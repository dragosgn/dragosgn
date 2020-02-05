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
  flex-direction: column;
  justify-content: start;
  background: #ffffff;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  margin: 2rem;
  transition: all 100ms ease-in-out;
`
const BookAvatar = styled.img`
  height: 130px;
  margin: 0;
`
const Description = styled.div`
  padding: ${rhythm(1 / 2)};
`
const Title = styled.p`
  margin: 0 0 12px 0;
  padding: 0;
  width: 13rem;
`

const TranCancelled = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  console.log(data.goodreadsShelf.reviews.map(({ book }) => ({ book })))
  const books = data.goodreadsShelf.reviews.map(({ book }) => {
    return {
      title: book.title,
      imgUrl: book.imageUrl,
    }
  })

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Reading right now" />
      <p style={{ ...scale(0.5) }}>Personal reading list:</p>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {books.map(({ title, imgUrl }) => {
          return (
            <BookWrapper key={title}>
              <BookAvatar src={imgUrl} alt={title} />
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
