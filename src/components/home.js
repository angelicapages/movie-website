import React, { Component } from 'react'
import MejorPuntuadas from './MejorPuntuadas'
import UltimosLanzamientos from './UltimosLanzamientos'
import Carrusel from './Carrusel'
import { ContenedorGeneral } from './style/ContenedoresStyle'

// El nombre del archivo deberia estar en mayusculas como los demas: la consistencia es importante
export class Home extends Component {
    render() {
        return (
            <ContenedorGeneral margin="0px">
                <Carrusel />
                <UltimosLanzamientos />
                <MejorPuntuadas />
            </ContenedorGeneral>
        )
    }
}

export default Home
