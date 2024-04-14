const NavBar = () => {
    return(
        <nav className="menuOptions">
            <input type="checkbox" id="check" className="checkbtn" />
            <label htmlFor="check" className="checkbtn"><i className="fas fa-bars"></i></label>
            <ul>
                <li><a href="/">Zona Gaming</a><i className="fas fa-angle-down"></i></li>
                <li><a href="/">Componentes</a><i className="fas fa-angle-down"></i></li>
                <li><a href="/">Computación</a><i className="fas fa-angle-down"></i></li>
                <li><a href="/">Consolas</a><i className="fas fa-angle-down"></i></li>
                <li><a href="/">Redes y Server</a><i className="fas fa-angle-down"></i></li>
                <li><a href="/">Mantenimiento Equipos</a><i className="fas fa-angle-down"></i></li>
                <li><a href="/">Otras Categorías</a><i className="fas fa-angle-down"></i></li>
            </ul>
        </nav>
    )
}

export default NavBar;