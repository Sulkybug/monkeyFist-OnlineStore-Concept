class Item {
  constructor(name, id, quantity, price, totalPrice) {
    this.name = name;
    this.id = id;
    this.quantity = quantity;
    this.price = price;
    this.totalPrice = totalPrice;
  }

  addQuantity() {
    return this.quantity++;
  }

  reduceQuantiy() {
    return this.quantity--;
  }

  totalValue() {
    return (this.totalPrice = (this.price * this.quantity).toFixed(2));
  }
}

export default Item;
