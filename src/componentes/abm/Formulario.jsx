import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from "react-router-dom";
import '../../css/Formulario.css'

export const Formulario = (props) => {

    let [instrumento, setInstrumento] = useState({...props})
    
    const { register, handleSubmit } = useForm({
        defaultValues: instrumento
    });

    let [imagen, setImagen] = useState(instrumento.src);
    let history = useHistory();


    const almacenarDatos = (data) => {  
        if ( data.imagen !== undefined) {
            let reader = new FileReader();
            reader.readAsDataURL(data.imagen[0]);
            reader.onload = () => {
                data.imagen = reader.result;
                instrumento.enviarDatos(data);
            }
        }else{
            data.imagen = '';
            instrumento.enviarDatos(data);
        }
        history.push('/instrumentos')
    }

    const cambiarFoto = (event) => {
        setImagen(URL.createObjectURL(event.target.files[0]))
    }
    


    return (
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
                    </div>
                </form>
            </div>
    )

}