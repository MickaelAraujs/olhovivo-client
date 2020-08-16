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
    routesLocations?: {
        latitude: number;
        longitude: number;
    }[];
}

const MapView: React.FC<MarkerCoordinates> = ({
    locations,
    routesLocations,
}) => {
    return (
        <div className="map-view">
            <Map
                center={[-23.7129689, -46.691479]}
                zoom={15}
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

                {routesLocations?.map((location, index) => (
                    <Marker
                        key={index}
                        position={[location.latitude, location.longitude]}
                    />
                ))}
            </Map>
        </div>
    );
};

export default MapView;
