import React, { useCallback, useState } from 'react';
import {Formulario} from './Formulario'
import axios from 'axios'

export const Instrumento = {
    instrumento: '',
    marca: '',
    modelo: '',
    precio: 0.0,
    cantidadVendida: 0,
    descripcion: '',
    costoEnvio: 0,
    src: '',
    imagen: '',
    enviarDatos: ''
}

export const Crear = () =>{

    let [instrumento, setInstrumento] = useState(Instrumento)

    const enviarDatos = async (data) => {
        try{
            await axios.post('http://localhost:8080/instrumentos', data);
            alert('Instrumento creado satisfactoriamente')
        }catch(error){
            console.error(error)
        }
    }

    return (
        <Formulario
            instrumento={instrumento.instrumento}
            descripcion={instrumento.descripcion}
            marca={instrumento.marca}
            modelo={instrumento.modelo}
            precio={instrumento.precio}
            costoEnvio={instrumento.costoEnvio}
            cantidadVendida={instrumento.cantidadVendida}
            src={instrumento.src}
            enviarDatos={useCallback(enviarDatos)}
        />
    )
}