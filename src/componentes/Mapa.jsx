import { Component } from "react";
import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import '../css/Mapa.css'


let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

export default class Mapa extends Component {

    render() {
        return <div>
            <h4 className="text-center mt-5 text-dark">Av. Las Heras y Av. San Martin, Ciudad de Mendoza</h4>
            <MapContainer
                className="my-5 mx-auto" center={[-32.88639, -68.83829]} zoom={19} scrollWheelZoom={false}>
                <TileLayer
                    attribution=""
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[-32.88629, -68.83849]}>
                    <Popup>
                        Musical Hendrix
                </Popup>
                </Marker>
            </MapContainer>
        </div>
    }
}

