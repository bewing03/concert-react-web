import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';



const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiZGFua2F0eiIsImEiOiJjajhxcjhtdHIwbXdlMnFxaTBhNWw4aTZvIn0.QQyzmDZ90RYb3qxuGHNWKw"
});

class MapView extends Component {
  state = {
    user: {},
    radius: 10,
  }
  /*_getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(pos) {
      user.lat = pos.coords.latitude;
      user.lng = pos.coords.longitude;
    }
    else {
      alert("Geolocation not supported on browser");
    }
   }*/
  render() {
    return (
      <Map
        style="mapbox://styles/mapbox/satellite-streets-v10"
        containerStyle={{
          height: "100vh",
          width: "100vw"
        }}
        center={[-71.059, 42.36]}
      >
        <Marker
          coordinates={[-71.059, 42.36]}
          >

        </Marker>
      </Map>
    )
  }
}

export default MapView;
