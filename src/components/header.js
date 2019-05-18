import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import ImageProfile from "../components/image_profile"

import "./header.css"

const Header = ({ siteTitle }) => (
  <header>
    <div className="header-container">
      <div className="image-container">
        <ImageProfile />
      </div>

      <h1 style={{ margin: `20px 0` }}>
        <Link to="/" className="site-title">
          {siteTitle}
        </Link>
      </h1>
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/CV/" className="nav-link">CV</Link>
      <Link to="/Projects/" className="nav-link">Projects</Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
