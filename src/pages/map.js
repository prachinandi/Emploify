import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 20.593683,
      lng: 78.962883
    },
    zoom: 0
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAthQa6eAQxmw_QG4PF8EQhhuzhUKM9hck"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={20.593683}
            lng={78.962883}
            text=""
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
