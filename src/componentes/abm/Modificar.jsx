import React, { useState, useEffect } from "react";
import { Formulario } from './Formulario'
import axios from 'axios'
import { useParams } from 'react-router'
import { useHistory } from "react-router-dom";
import { Instrumento } from './Crear'



export const Modificar = () => {
    let { id } = useParams();
    let history = useHistory();
    let [instrumento, setInstrumento] = useState(Instrumento);
    let [load, setLoad] = useState(false);

    const cargar = async () => {
        if (id !== undefined) {
            try{
                let datos = await fetch(`http://localhost:8080/instrumentos/${id}`);
                setInstrumento(await datos.json())
                setLoad(true)
            }catch(error){
                console.error(error) 
            }
        }
    }

    const enviarDatos = async (data) => {
        try {
            await axios.put(`http://localhost:8080/instrumentos/${id}`, data);
            alert('Instrumento modificado satisfactoriamente')
        } catch (error) {
            console.error(error)
        }
    }

    const eliminar = () => {
        axios.delete(`http://localhost:8080/instrumentos/${id}`).then(data => {
            alert('Eliminado satisfactoriamente')
            history.push('/instrumentos');
        }
        )
    }
    useEffect(() => {
        cargar()
    }, [])

    return (
        <div>
            {
                load ?
                    <div className="my-lg-3">
                        <Formulario
                            instrumento={instrumento.instrumento}
                            cantidadVendida={instrumento.cantidadVendida}
                            descripcion={instrumento.descripcion}
                            marca={instrumento.marca}
                            modelo={instrumento.modelo}
                            costoEnvio={instrumento.costoEnvio}
                            precio={instrumento.precio}
                            src={instrumento.imagen}
                            enviarDatos={enviarDatos}
                        />
                        <div className="text-center">
                            <div onClick={eliminar} className="btn btn-danger mx-2 shadow-none">Eliminar</div>
                        </div>
                    </div>
                :
                <h1>No existe el instrumento</h1>
                
            } 
        </div>
    )
}