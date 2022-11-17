import AddToCartItem from "../assets/icons/AddToCart.png"

const ListItem = () => {
    return (
    <div className={"item-card"}>
        <img className={"img-fluid"} src="/img.jpg" alt="Item" height={"200px"}/>
        <div className={"item-card__information"}>
            <div className={"pricing"}>
                <span>$340</span>
                <small>
                    <strike>$540</strike>
                </small>
            </div>
            <div className={"title"}>
                <h3>Title</h3>
            </div>
        </div>
        <button className={"cart-add"}>
            <span>Add to Cart</span>
            <img src={AddToCartItem} alt="Cart Item" height={"15px"}/>
        </button>
    </div>
    )
}

export default ListItem;