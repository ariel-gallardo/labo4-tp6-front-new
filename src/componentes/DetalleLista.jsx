import {React} from 'react'
import { Link, useHistory } from 'react-router-dom'
import '../css/DetalleLista.css'

export const DetalleLista = (props) =>{

    let history = useHistory()

    return <li className="d-flex ElementoLista my-lg-2">
        <Link to={`/detalle/${props.id}`}>
            <img className="DetalleLista" src={props.imagen} alt="-" />
        </Link>
        <span className="px-lg-2">
            <p className="my-lg-1">{props.instrumento}</p>
            <p className="Precio my-lg-2">$ {Number(props.precio).toLocaleString('de-DE')}</p>
            <p className={(Number(props.costoEnvio) <= 0 ? 'EnvioGratis' : 'EnvioPago') + ' Envio my-lg-1'}>{(Number(props.costoEnvio) <= 0 ? `Envio Gratis a todo el país` : `Costo de envio interior de argentina $ ${props.costoEnvio}`)}</p>
            <p className="Ventas my-lg-1">{Number(props.cantidadVendida) > 0 ? `${props.cantidadVendida} vendidos` : `-`}</p>
        </span>
        <span className="d-flex">
            <Link className="btn btn-info align-self-center boton m-lg-2" to={`/editar/${props.id}`}>EDITAR</Link>
        </span>
    </li>
}