function Item(name, id, quantity, price, totalPrice) {
  this.name = name;
  this.id = id;
  this.quantity = quantity;
  this.price = price;
  this.totalPrice = totalPrice;
  console.log("new Item Created");
}

export default Item;
