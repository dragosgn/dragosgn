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
const Title = styled.h5`
  margin: 0 0 12px 0;
  padding: 0;
`

const BookBox = styled.div`
  min-width: 100px;
  display: flex;
  align-items: center;
  align-content: center;
`

String.prototype.trunc =
  String.prototype.trunc ||
  function(n) {
    return this.length > n ? this.substr(0, n - 1) + "&hellip;" : this
  }

const ReadingNow = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const books = data.goodreadsShelf.reviews.map(
    ({ book: { title, description, imageUrl } }) => {
      return {
        title,
        imageUrl,
        description,
      }
    }
  )

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Reading right now" />
      <h3 style={{ ...scale(1 / 2) }}>Must reads:</h3>
      <div style={{ marginBottom: "2rem", marginTop: "1rem" }}>
        {books.map(({ title, imageUrl, description }) => {
          return (
            <BookWrapper key={title}>
              <BookBox>
                <BookAvatar src={imageUrl} alt={title} />
              </BookBox>
              <Description>
                <Title
                  style={{ ...scale(0.1) }}
                  dangerouslySetInnerHTML={{ __html: title.trunc(30) }}
                ></Title>
                <div
                  style={{ ...scale(-0.15) }}
                  dangerouslySetInnerHTML={{ __html: description.trunc(200) }}
                />
              </Description>
            </BookWrapper>
          )
        })}
      </div>
    </Layout>
  )
}

export default ReadingNow

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
