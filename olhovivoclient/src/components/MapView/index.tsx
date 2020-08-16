/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-indent-props */

import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import { LocationsProps } from '../../pages/BusLocation';

import './styles.css';

interface MarkerCoordinates {
    locations?: LocationsProps[];
    routesLocations?: {
        latitude: number;
        longitude: number;
    }[];
    stops?: {
        cp: number;
        ed: string;
        np: string;
        px: number;
        py: number;
    }[];
}

const MapView: React.FC<MarkerCoordinates> = ({
    locations,
    routesLocations,
    stops,
}) => {
    return (
        <div className="map-view">
            <Map
                center={[-23.7129689, -46.691479]}
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

                {routesLocations?.map((location, index) => (
                    <Marker
                        key={index}
                        position={[location.latitude, location.longitude]}
                    />
                ))}

                {stops?.map(stop => (
                    <Marker key={stop.cp} position={[stop.py, stop.px]}>
                        <Popup>
                            <h3 className="stop-name">{stop.np}</h3>
                            <span className="stop-address">{stop.ed}</span>
                        </Popup>
                    </Marker>
                ))}
            </Map>
        </div>
    );
};

export default MapView;
