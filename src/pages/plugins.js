import * as React from "react"
import { Typography } from 'antd';
import { Row, Col } from 'antd';
import { Card } from 'antd';
import { Divider } from 'antd';
import Map from "../components/map.js";
import PluginSelect from "../components/plugin-select.js";
import { Link } from "gatsby";
const { Title } = Typography;

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const PluginExplorerPage = () => {
  const [profile, updateProfile] = React.useState('directions,geocoding');

  return (
     <main style={pageStyles}>
      <div>
        <Row gutter={48}>
          <Col span={8}>
          <Title level={2}>Mapbox GL JS plugin explorer</Title>
          <Divider orientation="left"><Title level={3}>Plugins</Title></Divider>
          <PluginSelect profile={profile} updateProfile={updateProfile}/>
          <Divider orientation="left"><Title level={4}>Parameters</Title></Divider>
              {
              profile.toString().split(',').map(function (name, index) {
                return <Card size="small" title={name} extra={<a href="docs.mapbox.com">github</a>} style={{ width: 300 }}>
                   <p key={index}>The {name} plugin</p>
                </Card>
              })}
            <br />
            <Link to="/">Go home.</Link>
          </Col>
          <Col span={16}>
            <Map profile={profile}/>
          </Col>
        </Row>
      </div>
      </main>
    )
  }

export default PluginExplorerPage

