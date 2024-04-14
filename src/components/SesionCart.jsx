import Login from "./Login"
import CartWidget from "./CartWidget"

const SesionCart = () =>{
    return(
        <div className="sesionCart">
            <Login />
            <span className="separador">|</span>
            <CartWidget />
        </div>
    )
}

export default SesionCart