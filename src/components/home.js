import React, { Component } from 'react'
import MejorPuntuadas from './MejorPuntuadas'
import UltimosLanzamientos from './UltimosLanzamientos'
import Carrusel from './Carrusel'
import { ContenedorGeneral } from './style/ContenedoresStyle'

export class Home extends Component {
    render() {
        return (
            <ContenedorGeneral>
                <Carrusel />
                <UltimosLanzamientos />
                <MejorPuntuadas />
            </ContenedorGeneral>
        )
    }
}

export default Home
