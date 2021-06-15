import { BrowserRouter, Route } from 'react-router-dom'
import UltimosLanzamientos from './components/UltimosLanzamientos'
import NavBarTop from './components/NavBarTop'
import Populares from './components/Populares'
import Buscar from './components/Buscar'
import Home from './components/home'
import PeliculaPopular from './components/Pelicula'
import PeliculaDetalle from './components/PeliculaDetalle'
import { ContenedorGeneral } from './components/style/ContenedoresStyle'
import { ThemeProvider } from 'styled-components'
import theme from './components/style/Theme'
function App() {

  return (
    <ThemeProvider theme={theme}>
      <ContenedorGeneral>
        <BrowserRouter>
          <NavBarTop />
          <Route exact path="/" component={Home} />
          <Route exact path="/Ultimos-Lanzamientos" component={UltimosLanzamientos} />
          <Route exact path="/Populares" component={Populares} />
          <Route exact path="/Buscar" component={Buscar} />
          <Route exact path="/PeliculaPopular" component={PeliculaPopular} />
          <Route exact path="/PeliculaDetalle/:id" component={PeliculaDetalle} />
        </BrowserRouter>
      </ContenedorGeneral>
    </ThemeProvider>
  );
}


export default App;
