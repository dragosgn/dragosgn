import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { scale, rhythm } from "../utils/typography"

const NavBar = styled.nav`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: ${rhythm(1.5)};
`

const H1 = styled.h1`
  font-family: "Roboto Condensed", "sans-serif";
`

const NavLink = styled(Link)`
  text-align: center;
  text-decoration: none;
  padding: ${rhythm(0.5)} ${rhythm(1.5)};
  border: 2px solid transparent;
  border-radius: 3px;
  @media screen and (max-width: 768px) {
    padding: ${rhythm(0.25)} ${rhythm(0.5)};
  }
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
          {title}
        </Link>
      </H1>
      <NavLink
        isActive={location.pathname === `/blog`}
        to={`/blog`}
        style={{
          ...scale(1 / 4),
          boxShadow: "none",
          fontFamily: "Roboto Condensed",
        }}
      >
        blog
      </NavLink>
      <NavLink
        isActive={location.pathname === `/reading-now`}
        to={`/reading-now`}
        style={{
          ...scale(1 / 4),
          boxShadow: "none",
          fontFamily: "Roboto Condensed",
        }}
      >
        reading
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
      <footer style={{ paddingTop: `${rhythm(1 / 4)}` }}>
        © {new Date().getFullYear()}, built with ❤️ by Dragos Nedelcu for
        humans.
      </footer>
    </div>
  )
}

export default Layout
