import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from "react-router-dom";
import '../../css/Formulario.css'

export const Formulario = (props) => {

    let [instrumento, setInstrumento] = useState({ ...props })

    const { register, handleSubmit } = useForm({
        defaultValues: instrumento
    });

    let [imagen, setImagen] = useState(instrumento.src);
    let history = useHistory();


    const almacenarDatos = (data) => {
        if (data.imagen !== undefined) {
            let reader = new FileReader();
            reader.readAsDataURL(data.imagen[0]);
            reader.onload = () => {
                data.imagen = reader.result;
                instrumento.enviarDatos(data);
            }
        } else {
            data.imagen = '';
            instrumento.enviarDatos(data);
        }
        history.push('/instrumentos')
    }

    const cambiarFoto = (event) => {
        setImagen(URL.createObjectURL(event.target.files[0]))
    }



    return (
        <div className="my-lg-3">
            <h1 className="text-center text-dark">Formulario</h1>
            <form className="col-lg-6 mx-auto" onSubmit={handleSubmit(almacenarDatos)}>
                <div>
                    <input {...register('instrumento')} className="form-control my-lg-5" type="text" placeholder="Denominacion" />
                    <label for='instrumento'>Instrumento</label>
                </div>
                <div>
                    <input {...register('marca')} className="form-control my-lg-5" type="text" placeholder="Marca" />
                    <label>Marca</label>
                </div>
                <div>
                    <input {...register('modelo')} className="form-control my-lg-5" type="text" placeholder="Modelo" />
                    <label>Modelo</label>
                </div>
                <div>
                    <input {...register('precio')} className="form-control my-lg-5" type="number" step='0.1' placeholder="Precio" />
                    <label>Precio</label>
                </div>
                <div>
                    <input {...register('cantidadVendida')} className="form-control my-lg-5" type="number" placeholder="Cantidad de ventas" />
                    <label>Cantidad vendida</label>
                </div>
                <div>
                    <textarea {...register('descripcion')} className="form-control my-lg-5" rows='8' placeholder="Descripcion"></textarea>
                    <label>Descripción</label>
                </div>
                <div>
                    <input {...register('costoEnvio')} className="form-control my-lg-5" type="number" step='0.1' placeholder="Costo de envio" />
                    <label>Costo de envio</label>
                </div>
                <div>
                    <input onInput={cambiarFoto} {...register('imagen')} className="form-control my-lg-5" type="file" />
                </div>
                <div className="my-lg-5 text-center">
                    <img src={imagen} alt={'no hay imagen aún'} className="img-thumbnail Foto" />
                </div>

                <div className="text-center">
                    <button className="btn btn-outline-light shadow-none" type="submit">Cargar</button>
                </div>
            </form>
        </div>
    )

}