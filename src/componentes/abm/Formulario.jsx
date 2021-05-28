import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useHistory } from "react-router-dom";
import '../../css/Formulario.css'

export const Formulario = () => {

    let { id } = useParams();
    const { register, handleSubmit, setValue } = useForm();
    let [imagen, setImagen] = useState('');
    let [existe, setExiste] = useState(false);
    let history = useHistory();

    const enviarDatos = async (data) => {
        try {
            await axios.post('http://localhost:8080/instrumentos', data);
        } catch (error) {
            console.error(error)
        }
    }

    const almacenarDatos = (data) => {
        if ((id !== undefined && data.imagen !== undefined) || (data.imagen !== undefined)) {
            let reader = new FileReader();
            reader.readAsDataURL(data.imagen[0]);
            reader.onload = () => {
                data.imagen = reader.result;
                enviarDatos(data);
                return history.push('/instrumentos');
            }
        }
        data.imagen = '';
        enviarDatos(data);
        return history.push('/instrumentos');
    }

    const cargar = () => {

        if (id !== undefined) { 
            axios.get(`http://localhost:8080/instrumentos/${id}`).then(insData => {
                let ins = insData.data
                setExiste(true)
                setValue("instrumento", ins.instrumento)
                setValue("marca", ins.marca)
                setValue("modelo", ins.modelo)
                setValue("precio", ins.precio)
                setValue("cantidadVendida", ins.cantidadVendida)
                setValue("descripcion", ins.descripcion)
                setValue("costoEnvio", ins.costoEnvio)
                setImagen(ins.imagen)
            }).catch(error =>{
                
            })
        }
    }

    const cambiarFoto = (event) => {
        setImagen(URL.createObjectURL(event.target.files[0]))
    }

    const eliminar = () => {
            axios.delete(`http://localhost:8080/instrumentos/${id}`).then(data => {
                alert('Eliminado satisfactoriamente')
                history.push('/instrumentos');
            }
        )
    }


    useEffect(() =>{
        cargar()
    })

    return (
        <div className="mx-lg-auto Formulario my-lg-5">
            {
                (id === undefined && existe === false) || (id !== undefined && existe === true) ?  
            <div>
                <h1 className="text-center text-white">Formulario</h1>
                <form className="col-lg-6 mx-auto" onSubmit={handleSubmit(almacenarDatos)}>
                    <input {...register('instrumento')} className="form-control my-lg-5" type="text" placeholder="Denominacion" />
                    <input {...register('marca')} className="form-control my-lg-5" type="text" placeholder="Marca" />
                    <input {...register('modelo')} className="form-control my-lg-5" type="text" placeholder="Modelo" />
                    <input {...register('precio')} className="form-control my-lg-5" type="number" step='0.1' placeholder="Precio" />
                    <input {...register('cantidadVendida')} className="form-control my-lg-5" type="number" placeholder="Cantidad de ventas" />
                    <textarea {...register('descripcion')} className="form-control my-lg-5" rows='8' placeholder="Descripcion"></textarea>
                    <input {...register('costoEnvio')} className="form-control my-lg-5" type="number" step='0.1' placeholder="Costo de envio" />
                    <input onInput={cambiarFoto} {...register('imagen')} className="form-control my-lg-5" type="file" />
                    <div className="my-lg-5 text-center">
                        <img src={imagen} alt={'no hay imagen aún'} className="img-thumbnail Foto" />
                    </div>
                    <div className="text-center">
                                <button className="btn btn-outline-light shadow-none" type="submit">Cargar</button>
                                {id !== undefined ? <button onClick={eliminar} className="btn btn-danger mx-2 shadow-none">Eliminar</button> : ''}
                    </div>
                </form>
            </div>
            :
            <h1>
                No existe
            </h1>
            }
        </div>
    )

}