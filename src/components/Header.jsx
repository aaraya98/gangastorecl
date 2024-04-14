import PresentationSearch from "./PresentationSearch"
import SesionCart from "./SesionCart"
import NavBar from "./NavBar"

const Header = () =>{
    return(
        <header className="cabezal">
            <PresentationSearch text="¡Bienvenidos a GangaStore, tus equipos preferidos a mejor precio!"/>
            <SesionCart />
            <NavBar />
        </header>
    )
}

export default Header