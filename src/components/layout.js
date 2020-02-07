import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { graphql } from "gatsby"

import { scale, rhythm } from "../utils/typography"
import Footer from "./footer"

const NavBar = styled.nav`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: ${rhythm(1.5)};
`

const H1 = styled.h1`
  ${{ ...scale(1) }};
  @media screen and (max-width: 768px) {
    ${{ ...scale(1 / 1.5) }};
  }
`

const NavLink = styled(Link)`
  ${{ ...scale(1 / 1.5) }};
  text-align: center;
  text-decoration: none;
  border: 2px solid transparent;
  border-radius: 3px;
  display: flex;
  align-content: center;
  @media screen and (max-width: 768px) {
    ${{ ...scale(1 / 4) }};
  }
  line-height: 0;
  display: flex;
  align-content: center;
  align-items: center;
`

const Layout = ({ location, title, children }) => {
  // const rootPath = `${__PATH_PREFIX__}/blog`
  let header = (
    <NavBar>
      <H1
        style={{
          flexGrow: 3,
          margin: "auto",
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          dragosgn
        </Link>
      </H1>
      <NavLink isActive={location.pathname === `/blog`} to={`/blog`}>
        <p>blog</p>
      </NavLink>
      <NavLink
        isActive={location.pathname === `/reading-now`}
        to={`/reading-now`}
      >
        <p>reading</p>
      </NavLink>
    </NavBar>
  )

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(28),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
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
