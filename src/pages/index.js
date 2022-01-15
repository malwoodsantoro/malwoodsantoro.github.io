import * as React from "react"
import nocs from "../images/nocs.jpg"
import MyMenu from "../components/mymenu"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 10,
  maxWidth: 320,
  fontSize: 40,
  color: "#a7cbe2"
}

const menuStyles = {
  color: "#a7cbe2",
  fontSize: 20
}

const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: 30,
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

// markup
const IndexPage = () => {
  return ( 
    <main style={pageStyles}>
      <div style={menuStyles}><MyMenu /></div>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        Mal 
        <br></br>Wood-Santoro
      </h1>
      <img
        alt="Gatsby G Logo"
        src={nocs}
        style={{ width: 350 }}
      />
    </main>
  )
}

export default IndexPage
