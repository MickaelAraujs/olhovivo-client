/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-indent-props */
import React from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';
import { LocationsProps } from '../../pages/BusLocation';

import './styles.css';

interface MarkerCoordinates {
    locations?: LocationsProps[];
}

const MapView: React.FC<MarkerCoordinates> = ({ locations }) => {
    return (
        <div className="map-view">
            <Map
                center={[-23.6815314, -46.8755]}
                zoom={10}
                className="leaflet-container"
            >
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {locations?.map(location => {
                    return location.coordinates.map((coordinate, index) => (
                        <Marker
                            position={[
                                coordinate.latitude,
                                coordinate.longitude,
                            ]}
                            key={index}
                        />
                    ));
                })}
            </Map>
        </div>
    );
};

export default MapView;
