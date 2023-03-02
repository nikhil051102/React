import React from "react";

class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      price: 999,
      title: "Phone",
      qty: 1,
      img: "",
    };
  }
  increaseQuantity =()=> {
    console.log('this', this.state)
}
  render() {
    const { price, title, qty } = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{this.state.title}</div>
          <div style={{ color: "#777" }}>{price}</div>
          <div style={{ color: "#777" }}>{qty}</div>
          <div className="cart-item-actions">
            {/*Button*/}
            <img
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
              alt="increase"
              onClick={this.increaseQuantity.bind(this)}
            />
            <img
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
              alt="decrease"
            />
            <img
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/3395/3395538.png"
              alt="delete"
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 100,
    borderRadius: 4,
    background: "#ccc",
  },
};

export default CartItem;
