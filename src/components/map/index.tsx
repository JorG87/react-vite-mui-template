import React from 'react';
import { MapContainer, TileLayer, Circle } from 'react-leaflet';
import { LatLngTuple, PathOptions } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map: React.FC = () => {
  const center: LatLngTuple = [26.6406, -81.8723]; // Coordinates for Fort Myers, FL
  const radius = 50000; // Radius in meters (adjust as needed)

  const circleOptions: PathOptions = {
    color: 'red',
    fillColor: 'pink',
    fillOpacity: 0.5
  };

  return (
    <MapContainer 
      center={center} 
      zoom={8} 
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Circle 
        center={center} 
        pathOptions={circleOptions}
        radius={radius}
      />
    </MapContainer>
  );
};

export default Map
