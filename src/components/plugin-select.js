import * as React from "react"
import { Select } from 'antd';
import { Typography } from 'antd';
const { Option } = Select;
const { Title } = Typography;

export default function PluginSelect({updateProfile}) {
  // super(props);
  // this.state = {
  //   profile: this.props.coordinates
  // };

    // function updateProfile(value) {
    //   console.log('changed profile')
    // }

  return (
    <Select
      mode="multiple"
      style={{ width: '100%' }}
      placeholder="Select a plugin"
      defaultValue={['directions', 'geocoding']}
      onChange={(value) => updateProfile(value)}
      optionLabelProp="label"
    >
      <Option value="directions" label="directions">
        <div className="demo-option-label-item">
          <Title level={4}>🚕 directions</Title>
        </div>
      </Option>
      <Option value="geocoding" label="geocoding">
        <div className="demo-option-label-item">
          <span role="img" aria-label="geocoding">
          </span>
          <Title level={4}>📍 geocoding</Title>
        </div>
      </Option>
      <Option value="draw" label="draw">
        <div className="demo-option-label-item">
          <Title level={4}>✎ draw</Title>
        </div>
      </Option>
      <Option value="minimap" label="minimap">
        <div className="demo-option-label-item">
          <Title level={4}>🗺 minimap</Title>
        </div>
      </Option>
    </Select>
  );
}
