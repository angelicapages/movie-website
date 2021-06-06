import React, { Component } from 'react'
import MejorPuntuadas from './MejorPuntuadas'
import UltimosLanzamientos from './UltimosLanzamientos'
import Carrusel from './Carrusel'

export class Home extends Component {
    render() {
        return (
            <div>
                <h1>Dentro de home</h1>
                <div>
                    <Carrusel />
                </div>
                <div>
                    <UltimosLanzamientos />
                </div>
                <div>
                    <MejorPuntuadas />
                </div>
            </div>
        )
    }
}

export default Home
