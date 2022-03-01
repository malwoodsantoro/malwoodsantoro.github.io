import * as React from "react"
import { Link } from "gatsby"
import accessibilityGIF from '../gifs/accessibility.gif'
import docs from '../images/docs.png'
import download from '../images/download.png'
import '../css/site.css'

const pageStyles = {
  color: "#232129",
  paddingTop: 100,
  paddingBottom: 100,
  paddingLeft: 200,
  paddingRight: 200,
  fontFamily: "Playfair Display",
  textAlign: "center"
}

const headingStyles = {
  marginBottom: 10,
  fontSize: 26,
  fontFamily: "Playfair Display",
  color: "#49709F"
}

const AccessibilityPage = () => {

  return (
    <main style={pageStyles}>
      <div class="wrapper" style={{ maxWidth: 1100 }}>
        <header class="header">
          <div style={{ textAlign: "left", fontSize: 20, paddingBottom: 20 }}>
            <Link style={{ color: "#88BBEA", fontSize: 20, fontWeight: 'bold' }} to="/">> go back.</Link>
          </div>
        </header>
        <aside class="sidebar">
          <div style={headingStyles}>
            Mapbox documentation
          </div>
          <div>I worked on Mapbox documentation as a Frontend Engineer, maintaining and building upon our static site generator, React component library, and test/linting tools to empower product teams across the company to make contributions.</div>
        </aside>
        <aside class="content">
          <img style={{ padding: 20, minWidth: "200px", minHeight: "100%", maxWidth: "100%", maxHeight: "100%", objectFit: 'cover' }} src={docs} alt="Demonstration of the accessibility plugin" />
        </aside>
        <aside class="sidebar">
          <img style={{ padding: 20, minWidth: "200px", minHeight: "100%", maxWidth: "100%", maxHeight: "100%", objectFit: 'cover' }} src={accessibilityGIF} alt="Demonstration of the accessibility plugin" />
        </aside>
        <article class="content">
          <div style={headingStyles}>
            Making maps accessible
          </div>
          <div>
            Created a tool to provide a better experience for users with vision impairment or low vision who encounter a web map and need to gather information from it using a screen reader. I decided to tackle the three main issues: (1) the location of the map is not described, (2) it’s only possible to tab over existing features randomly because the tab-index of each feature is set to zero, and (3) the user isn’t given a way to meaningfully explore or move around the map. This implementation uses a bounding box that can be moved with the arrow keys. The direction the user is moving is read aloud (i.e. “Moving North”) and then the list of POIs in the area are announced. If a user selects a number corresponding to an announced place, the sidebar opens with all of the details available about the POI.
          </div>
        </article>
        <aside class="sidebar" style={headingStyles}>Experience with:</aside>
        <aside class="content"> Javascript/jQuery, HTML, CSS, React, Typescript, SASS, cURL, QGIS,    </aside>
        <footer class="footer" style={{ borderRadius: 0, marginTop: 50, borderTop: '4px solid #49709F' }}>
          <p style={{ textAlign: 'right' }}>©2020-2022 malwoodsantoro.com</p>
        </footer>
      </div>
    </main >
  )
}


export default AccessibilityPage

