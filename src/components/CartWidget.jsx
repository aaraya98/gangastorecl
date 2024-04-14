const CartWidget = () =>{
    return(
        <div className="container-fluid">
            <button className="btncarro cartShoppings" data-bs-toggle="modal" data-bs-target=".carritoModal"><i className="fa fa-shopping-cart"></i><span className="nameCart">Carrito</span><span className="position-absolute top-1 start-90 translate-middle badge rounded-pill bg-danger counterProducts">3</span></button>
            <div className="modal fade carritoModal" tabIndex="-1" aria-labelledby="carritoModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title carritoModalLabel">Tu Carrito de Compras</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <table className="table">
                                <thead className="cartTitle">
                                    <tr>
                                        <th className="text-center align-middle">Producto</th>
                                        <th className="text-center align-middle">Precio</th>
                                        <th className="text-center align-middle">Cantidad</th>
                                        <th className="text-center align-middle">Total</th>
                                        <th className="text-center align-middle">Eliminar</th>
                                    </tr>
                                </thead>
                                <tbody className="cartContent">
                                </tbody>
                                <tfoot className="totalCart">
                                </tfoot>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" className="btn-primary payCart">Pagar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartWidget;