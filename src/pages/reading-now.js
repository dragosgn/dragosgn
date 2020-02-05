import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto 12px auto;
  &:last-child {
    margin-bottom: 0;
  }
`
const BookAvatar = styled.img`
  height: 130px;
  margin: 0;
`
const Description = styled.div`
  flex: 1;
  margin-left: 18px;
  padding: 12px;
`
const Title = styled.p`
  margin: 0 0 12px 0;
  padding: 0;
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
      <h3>Personal reading list:</h3>
      <div>
        {books.map(({ title, imgUrl }) => {
          return (
            <UserWrapper>
              <BookAvatar src={imgUrl} alt={title} />
              <Description>
                <Title>{title}</Title>
              </Description>
            </UserWrapper>
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
