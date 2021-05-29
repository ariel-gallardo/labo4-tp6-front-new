import React from 'react'
import '../css/Home.css'

export const Home = () => {
    return (
        <div className="d-flex flex-column Home justify-content-center">
            <img className="align-self-center mb-lg-5" width="400vw" src={`${process.env.PUBLIC_URL}/images/guitar.svg`} alt="Guitarra Electrica"/>
            <p className="text-dark mt-lg-2 text-center Frase">Musical Hendrix es una tienda de instrumentos musicales con ya más de 15 años de experiencia. Tenemos el
conocimiento y la capacidad como para informarte acerca de las mejores elecciones para tu compra musical.</p>
        </div>
    )
}