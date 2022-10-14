
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

function NavBar() {

    
    return (
        <div className="navBar">
            <div className="tituloPag">
            <h2>
                <strong>Mi Ecommerce</strong>
            </h2>
            <CartWidget/>
            </div>
            <ul className="menuNav">
            <Link to="/">
                <li>Inicio</li>
            </Link>

            <Link to="categoria/cat/nuevo">
                <li>Nuevo</li>
            </Link>

            <Link to="categoria/cat/usado">
                <li>Usado</li>
            </Link>
            </ul>
        </div>        
    );
}

export default NavBar;