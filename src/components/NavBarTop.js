import { Link } from 'react-router-dom'
import Theme from '../style/style'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/styles';
// import MenuIcon from '@material-ui/icons/Menu';
// import { IconButton } from '@material-ui/core';


export default function NavBarTop() {


  return (

    <ThemeProvider theme={Theme}>
      <AppBar color="primary" position="fixed">

        <Typography variant="h1">Movies</Typography>
        <Toolbar>

          {/* <IconButton edge="start" color="dark">
            <MenuIcon />
          </IconButton> */}

          <Link to="/">
            <Button >Home</Button>
          </Link>

          <Link to="/Ultimos-Lanzamientos">
            <Button >Ultimos lanzamientos</Button>
          </Link>

          <Link to="/Populares">
            <Button >Populares</Button>
          </Link>

          <Link to="/Buscar">
            <Button >Buscar</Button>
          </Link>

        </Toolbar>
      </AppBar>
    </ThemeProvider>

  )
}
