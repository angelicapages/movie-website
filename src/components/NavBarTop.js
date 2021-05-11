import { Link } from 'react-router-dom'
import { makeStyles, withTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


export default function NavBarTop() {

    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        menuButton: {
          marginRight: theme.spacing(3),
        },
        title: {
          flexGrow: 1,
        },
      }));

      const classes = useStyles();
    return (
        <AppBar position="static" className={classes.root}>
            <Typography variant="h1" className={classes.title} >Movies</Typography>
            <Toolbar>
            {<Link to="/" >
                    <Button className={classes.color}>
                        <Typography>
                        Home
                        </Typography>
                        </Button>
                </Link>}
                
                <Link to="/New-movies">
                    <Button color="inherit">Ultimos lanzamientos</Button>
                </Link>
                <Link to="/Populares">
                    <Button color="inherit">Populares</Button>
                </Link>
                <Link to="/Buscar">
                    <Button color="inherit">Buscar</Button>
                </Link>
            </Toolbar>
        </AppBar>
    )
}
