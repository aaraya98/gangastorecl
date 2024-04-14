const Presentation = (slogan) =>{
    return(
        <div className="containerCabezal">
            <div className="information">
                <p>¡Atención! Los viernes, nuestro horario de tienda y punto de retiro será hasta las 12:00 Hrs. hasta nuevo aviso.</p>
            </div>
            <div className="logoHeader">
                <a href="/"><img src="./images/logo/Logoconfondocircular.png" alt="logo" /></a>
            </div>
            <div className="presentationSearch">
                <div className="presentation">
                    <h1>{slogan.text}</h1>
                </div>
                <form action="" className="search">
                    <input type="search" placeholder="Busca aquí..." />
                    <button type="submit">
                        <i className="fa fa-search"></i>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Presentation