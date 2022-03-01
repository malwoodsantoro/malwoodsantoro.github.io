import * as React from "react"
import nocs from "../images/nocs.jpg"
import pups from "../images/pups.png"
import { GithubOutlined } from '@ant-design/icons';
import { EnvironmentOutlined } from '@ant-design/icons';
import { LinkedinOutlined } from '@ant-design/icons';
import { MailOutlined } from '@ant-design/icons';
import { Link } from "gatsby";
import '../css/site.css'

// styles
const pageStyles = {
  paddingTop: 100,
  paddingBottom: 100,
  fontFamily: "Playfair Display",
  textAlign: "center"
}

const headingStyles = {
  marginTop: 0,
  marginBottom: 10,
  fontSize: 44,
  fontWeight: 'bold',
  color: '#88BBEA',
  fontFamily: "Playfair Display",
  textAlign: "left"
}

const paragraphStyles = {
  textAlign: "left",
  fontSize: 16,
  marginLeft: 12,
  marginRight: 12,
  fontFamily: "Playfair Display"
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <div class="wrapper">
        <header class="header">
          <div style={{ marginBottom: 100 }}>
            <span style={{ float: "left", fontSize: 20, fontWeight: 'bold' }}>welcome.</span>
            <span style={{ float: "right", fontSize: 20, fontWeight: 'bold' }}><Link style={{ color: "#49709F" }} to="/work">work</Link></span>
          </div>
          <title>Mal Wood-Santoro</title></header>
        <aside class="sidebar">
          <div>
            <img
              alt="Gatsby G Logo"
              src={nocs}
              style={{ minWidth: "200px", minHeight: "100%", maxWidth: "100%", maxHeight: "100%", paddingRight: 20, borderRadius: 10 }}
            />
          </div>
          <div class="caption"><EnvironmentOutlined /> Leona Heights Park, home of <Link style={{ color: "#49709F" }} to="https://vimeo.com/286727919">Old Survivor</Link></div>
        </aside>
        <article class="content">
          <div style={{ verticalAlign: "middle" }}>
            <div style={headingStyles}>
              Mal<br />Wood-Santoro
            </div>
            <div style={paragraphStyles}>
              I am a software engineer living in <span style={{ fontWeight: "bold", fontSize: 20, color: "#49709F" }}>Oakland, California</span>. I believe the internet can be a more human place where people can connect, explore, and make meaning through thoughtfully built accessible applications and websites. While you are here, please meet my two dogs, Maple and Ollie. <br></br>
              <img
                alt="Maple and Ollie"
                src={pups}
                style={{ paddingTop: 10, paddingLeft: 30, paddingBottom: 20, minHeight: "75%", maxWidth: "75%", maxHeight: "75%" }}
              />
              <div style={{ paddingLeft: 20 }}>
                <div><GithubOutlined /> github: malwoodsantoro</div>
                <div><LinkedinOutlined /> linkedin: malwoodsantoro</div>
                <div><MailOutlined /> email: malwoodsantoro@gmail.com</div>
                <Link to="https://resume.creddle.io/resume/dqjv8kua6bv" style={{ color: "#49709F" }}>resume</Link>
              </div>
            </div>
          </div>
        </article>
        <footer class="footer" style={{ borderRadius: 0, marginTop: 50, borderTop: '4px solid #49709F' }}>
          <p style={{ textAlign: 'right' }}>©2020-2022 malwoodsantoro.com</p>
        </footer>
      </div>
    </main>
  )
}

export default IndexPage
