import React, { useEffect, useState } from 'react'
import {DetalleLista} from './DetalleLista';
import axios from 'axios';
import {Link} from 'react-router-dom'
import '../css/Lista.css'

export const Lista = () =>{

    let [instrumentos, setInstrumentos] = useState([]);
    

    const cargar = async () =>{
        let data = await axios.get('http://localhost:8080/instrumentos')
        setInstrumentos(data.data._embedded.instrumentos)
    }

    useEffect(() =>{
        cargar();
    },[])


    
    return <div className="d-flex flex-column">
        <div className="d-flex mx-auto justify-content-center Lista">
            {
                instrumentos.length > 0 ?
                    <ul className="list-group-flush">
                        {
                            instrumentos.map((ins) => {
                                let tempID = ins._links.self.href.match(/\/([0-9]){1,}/)[0]
                                tempID = tempID.substring(1, tempID.length)
                                return <DetalleLista key={tempID} id={tempID} instrumento={ins.instrumento} precio={ins.precio} costoEnvio={ins.costoEnvio} cantidadVendida={ins.cantidadVendida} descripcion={ins.descripcion} imagen={ins.imagen} />
                            })
                        }
                    </ul>
                    :
                    <div className="align-self-center text-center">
                        <img src={`${process.env.PUBLIC_URL}/images/Skull.svg`} alt="Let's rock" />
                        <h1 className="text-white text-uppercase mt-lg-2">todavia no hay instrumentos</h1>
                    </div>
            }
        </div>
        <Link to="/crear" className="btn btn-outline-dark text-uppercase shadow-none Agregar">agregar nuevo instrumento</Link>
    </div>
}