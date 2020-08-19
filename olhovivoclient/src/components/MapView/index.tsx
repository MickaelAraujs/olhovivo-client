/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-indent-props */

import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { FaAccessibleIcon } from 'react-icons/fa';

import { LocationsProps } from '../../pages/BusLocation';

import './styles.css';

interface MarkerCoordinates {
    locations?: LocationsProps[];

    stops?: {
        cp: number;
        ed: string;
        np: string;
        px: number;
        py: number;
    }[];

    zoom: number;
}

const MapView: React.FC<MarkerCoordinates> = ({ locations, stops, zoom }) => {
    return (
        <div className="map-view">
            <Map
                center={[-23.7129689, -46.691479]}
                zoom={zoom}
                className="leaflet-container"
            >
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {locations?.map((location, index) => (
                    <Marker
                        key={index}
                        position={[location.latitude, location.longitude]}
                    >
                        <Popup>
                            <div className="locations-pop-up">
                                {location.lt0 && (
                                    <h3>
                                        Terminal principal:
                                        <span>{location.lt0}</span>
                                    </h3>
                                )}

                                {location.lt1 && (
                                    <h3>
                                        Terminal secundário:
                                        <span>{location.lt1}</span>
                                    </h3>
                                )}

                                {location.accessible && (
                                    <span id="accessible">
                                        <FaAccessibleIcon />
                                        Accessível à pessoas com deficiência.
                                    </span>
                                )}
                            </div>
                        </Popup>
                    </Marker>
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
