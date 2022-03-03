import * as React from "react"
import resume from "../images/resume.png"
import { Link } from "gatsby"

const pageStyles = {
    color: "#232129",
    paddingTop: 50,
    paddingLeft: 200,
    paddingRight: 200,
    fontSize: 14,
    fontFamily: "Playfair Display",
    textAlign: "center"
  }

const Resume = () => {
    return (
        <div style={pageStyles}>
            <div style={{ textAlign: "left", fontSize: 20}}>
                <Link style={{ color: "#49709F", fontSize: 20, fontWeight: 'bold' }} to="/">> go back.</Link>
            </div>
            <img
                id="resume"
                alt="My resume"
                src={resume}
                style={{ minHeight: "75%", maxWidth: "75%", maxHeight: "75%" }}
            />
        </div>
    )
}

export default Resume