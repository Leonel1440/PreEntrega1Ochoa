
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.scss'


export const Navbar = () =>{

    return (
        <header className="header">
            <div className="header__container">
                <img src='./imgs/libreriaLogo.png'className="header__logo" alt='logo'></img>

                <nav className="navbar">
                    <p className="navbar__link">Productos</p>
                    <p className="navbar__link">Ofertas</p>
                    <p className="navbar__link">Contacto</p>
                </nav>
                <CartWidget />
            </div>
        </header>

    )
}