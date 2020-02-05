import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

const NavBar = styled.nav`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-content: center;
  margin-bottom: ${rhythm(1.5)};
`

const NavLink = styled(Link)`
  text-align: center;
  text-decoration: none;
  padding: ${rhythm(0.5)} ${rhythm(1.5)};
  border: 2px solid transparent;
  border-radius: 3px;
`

const Layout = ({ location, title, children }) => {
  // const rootPath = `${__PATH_PREFIX__}/blog`
  console.log()
  let header = (
    <NavBar>
      <h1
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
      </h1>
      <NavLink isActive={location.pathname === `/blog`} to={`/blog`}>
        blog
      </NavLink>
      <NavLink
        isActive={location.pathname === `/reading-now`}
        to={`/reading-now`}
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

      <footer style={{ paddingTop: `${rhythm(3)}` }}>
        © {new Date().getFullYear()}, built with ❤️ by Dragos Nedelcu for
        humans.
      </footer>
    </div>
  )
}

export default Layout
