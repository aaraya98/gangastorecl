import Products from "./products"

const ItemListContainer = () =>{
    return(
        <>
            <section className="sliderPromo">
                <ul>
                    <li><a href="/"><img src="/images/promotions/sliderpromo1.png" alt="Promocion Uno" /></a></li>
                    <li><a href="/"><img src="/images/promotions/sliderpromo2.png" alt="Promocion Dos" /></a></li>
                    <li><a href="/"><img src="/images/promotions/sliderpromo3.png" alt="Promocion Tres" /></a></li>
                    <li><a href="/"><img src="/images/promotions/sliderpromo4.png" alt="Promocion Cuatro" /></a></li>
                </ul>
            </section>
            <Products />
        </>
    )
}

export default ItemListContainer