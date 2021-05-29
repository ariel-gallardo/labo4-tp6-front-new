import {React} from 'react'
import { Link, useHistory } from 'react-router-dom'
import '../css/DetalleLista.css'
import '../css/Envio.css'

export const DetalleLista = (props) =>{

    let history = useHistory()

    const verCompleto = () =>{
        history.push(`/detalle/${props.id}`,props)
    }

    return <li className="my-lg-5 row border-bottom py-lg-1">
        <span className="d-flex ElementoLista col-lg-9">
            <div onClick={verCompleto}>
                <img className="DetalleLista" src={props.imagen} alt="-" />
            </div>
            <span className="px-lg-2">
                <p className="my-lg-1">{props.instrumento}</p>
                <p className="Precio my-lg-2">$ {Number(props.precio).toLocaleString('de-DE')}</p>
                <p className={(Number(props.costoEnvio) <= 0 ? 'EnvioGratis' : 'EnvioPago') + ' Envio my-lg-1'}>{(Number(props.costoEnvio) <= 0 ? `Envio Gratis a todo el país` : `Costo de envio interior de argentina $ ${props.costoEnvio}`)}</p>
                <p className="Ventas my-lg-1">{Number(props.cantidadVendida) > 0 ? `${props.cantidadVendida} vendidos` : `-`}</p>
            </span>
        </span>
        <span className="col-lg-3 d-flex justify-content-center">
            <Link className="btn btn-outline-dark align-self-center boton m-lg-2" to={`/editar/${props.id}`}>EDITAR</Link>
        </span>
    </li>
}