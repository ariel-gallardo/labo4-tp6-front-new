import React, { useEffect, useState } from 'react'
import { useHistory, Link } from "react-router-dom";
import {Instrumento} from './abm/Crear'
import '../css/DetalleCompleto.css'
import '../css/Envio.css'

export const DetalleCompleto = () => {

    let history = useHistory();
    
    let [instrumento,setInstrumento] = useState(Instrumento)

    useEffect(() =>{
        if(instrumento.descripcion === ''){
            setInstrumento(history.location.state)
        }
    },[])

    return (<div className="my-lg-5 DetalleCompleto">
        <div className="row my-lg-5">
            <span className="col-lg-6 d-flex flex-column align-self-center">
                <img className="imagen align-self-center" src={instrumento.imagen} />
                <p className="text-dark text-left">
                    <p>Descripción:</p>
                    {instrumento.descripcion}
                </p>
            </span>
            <span className="col-lg-6 d-flex flex-column justify-content-between Borde">
                <div>
                    <div className="my-lg-5 col-lg-6">
                        <p className="VentasCompleto">{instrumento.cantidadVendida} vendidos</p>
                        <p className="Instrumento">{instrumento.instrumento}</p>
                        <p className="PrecioCompleto my-lg-2">$ {Number(instrumento.precio).toLocaleString('de-DE')}</p>
                        <p>{instrumento.marca}</p>
                        <p>{instrumento.modelo}</p>
                        <p className={(Number(instrumento.costoEnvio) <= 0 ? 'EnvioGratis' : 'EnvioPago') + ' Envio my-lg-1'}>{(Number(instrumento.costoEnvio) <= 0 ? `Envio Gratis a todo el país` : `Costo de envio interior de argentina $ ${instrumento.costoEnvio}`)}</p>
                    </div>
                </div>
                <Link class="btn btn-outline-dark mb-lg-5 agregar" to="/instrumentos">Agregar al carrito</Link>
            </span>
        </div>
    </div>)
}