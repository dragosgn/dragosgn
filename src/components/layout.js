import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { graphql } from "gatsby"

import { scale, rhythm } from "../utils/typography"
import Footer from "./footer"

const BrandLink = styled(Link)`
  font-family: "Josefin Sans", sans-serif;
  font-weight: 900;
  color: var(--brandColor);
  box-shadow: none;
  ${{ ...scale(1) }};
  @media screen and (max-width: 768px) {
    ${{ ...scale(1 / 2) }};
  }
  @media all and (max-width: 400px) {
    ${{ ...scale(1 / 4) }};
  }
`

const NavLink = styled(Link)`
  font-family: "Josefin Sans", sans-serif;
  box-shadow: none;
  color: var(--textColor);
  ${{ ...scale(1 / 4) }};
  @media screen and (max-width: 768px) {
    ${{ ...scale(1 / 10) }};
  }
  @media all and (max-width: 400px) {
    ${{ ...scale(-1 / 10) }};
  }
`

const BookMeCTA = styled.a`
  font-family: "Josefin Sans", sans-serif;
  ${{ ...scale(1 / 4) }};
  @media screen and (max-width: 768px) {
    ${{ ...scale(1 / 10) }};
  }
  @media all and (max-width: 400px) {
    ${{ ...scale(-1 / 10) }};
  }
  color: var(--brandColor);
  border-width: 1px;
  border-style: solid;
  border-color: var(--brandColor);
  padding: ${rhythm(1 / 4)} ${rhythm(2 / 4)};
  border-radius: 30px;
`

const Layout = ({ location, title, children }) => {
  // const rootPath = `${__PATH_PREFIX__}/blog`
  let header = (
    <nav style={{ marginBottom: "1rem" }}>
      <div className="nav-container">
        <div className="nav-box brand">
          <BrandLink to={`/`}>{title}</BrandLink>
        </div>
        <div className="nav-box nav-link">
          <NavLink
            isActive={location.pathname === `/technology-leadership-blog`}
            to={`/technology-leadership-blog`}
          >
            blog
          </NavLink>
        </div>
        <div className="nav-box nav-link">
          <BookMeCTA
            href="https://calendly.com/dragosgn/book-dragos"
            target="_blank"
            rel="noopener noreferrer"
          >
            book me
          </BookMeCTA>
        </div>
      </div>
    </nav>
  )

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(28),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        paddingBottom: `${rhythm(3.5)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout

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
  }
`
