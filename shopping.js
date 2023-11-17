import Item from "./item.js";
const shoppingWindow = document.querySelector(".shopping-area");
const closeShoppingWindow = document.getElementById("close-shopping");
const cartButton = document.querySelector(".cart");
const checkoutbtn = document.querySelector(".goBtn");

const btnProduct1 = document.querySelector(".btn1");
const btnProduct2 = document.querySelector(".btn2");
const btnProduct3 = document.querySelector(".btn3");
const itemsCart = document.querySelector(".number-of-items");

const product1 = document.getElementById("code1");
const product2 = document.getElementById("code2");
const product3 = document.getElementById("code3");

const remove1 = document.querySelector(".remove1");
const remove2 = document.querySelector(".remove2");
const remove3 = document.querySelector(".remove3");

const infoP = document.querySelector(".information");
const span1 = document.querySelector(".span1");
const span2 = document.querySelector(".span2");
const span3 = document.querySelector(".span3");
const span4 = document.querySelector(".span4");
const span5 = document.querySelector(".span5");
const spanTotal = document.querySelector(".spanTotal");
const description1 = document.querySelector(".items-description1");
const description2 = document.querySelector(".items-description2");
const description3 = document.querySelector(".items-description3");
const shipping = document.querySelector(".shipping");
const tax = document.querySelector(".tax");
const total = document.querySelector(".total");

const innerNumber1 = document.querySelector(".number1");
const innerNumber2 = document.querySelector(".number2");
const innerNumber3 = document.querySelector(".number3");

const btnPay = document.querySelector(".pay");
const noItems = document.querySelector(".pAndImage");

const contactWindow = document.querySelector(".contact-area");
const closeContactWindow = document.getElementById("close-contact");
const contactBtn = document.querySelector(".contactClick");

const itemDelete1 = document.querySelector(".delete-items1");
const itemDelete2 = document.querySelector(".delete-items2");
const itemDelete3 = document.querySelector(".delete-items3");

//toggle Shoppin Cart Window
cartButton.addEventListener("click", () => {
  shoppingWindow.style.visibility = "visible";
  description();
});

checkoutbtn.addEventListener("click", () => {
  shoppingWindow.style.visibility = "visible";
  description();
});

closeShoppingWindow.addEventListener("click", () => {
  shoppingWindow.style.visibility = "hidden";
});

contactBtn.addEventListener("click", () => {
  contactWindow.style.visibility = "visible";
});

closeContactWindow.addEventListener("click", () => {
  contactWindow.style.visibility = "hidden";
});

// Creating Items Shopping

let val = 0;

let keychain = new Item("Keychain", 1, 0, 4.99, 0);
let small = new Item("Small", 2, 0, 7.99, 0);
let large = new Item("Large", 3, 0, 9.99, 0);

// Adding to the cart

btnProduct1.addEventListener("click", () => {
  buttonAction(
    keychain,
    product1,
    remove1,
    btnProduct1,
    innerNumber1,
    itemDelete1
  );
});
btnProduct2.addEventListener("click", () => {
  buttonAction(
    small,
    product2,
    remove2,
    btnProduct2,
    innerNumber2,
    itemDelete2
  );
});
btnProduct3.addEventListener("click", () => {
  buttonAction(
    large,
    product3,
    remove3,
    btnProduct3,
    innerNumber3,
    itemDelete3
  );
});

// Removing from the cart

remove1.addEventListener("click", () => {
  removeCart(
    keychain,
    product1,
    remove1,
    btnProduct1,
    innerNumber1,
    itemDelete1
  );
});

remove2.addEventListener("click", () => {
  removeCart(small, product2, remove2, btnProduct2, innerNumber2, itemDelete2);
});

remove3.addEventListener("click", () => {
  removeCart(large, product3, remove3, btnProduct3, innerNumber3, itemDelete3);
});

// Deleting every unit of an item

itemDelete1.addEventListener("click", () => {
  val = val - keychain.quantity + 1;
  keychain.quantity = 1;

  removeCart(
    keychain,
    product1,
    remove1,
    btnProduct1,
    innerNumber1,
    itemDelete1
  );
});

itemDelete2.addEventListener("click", () => {
  val = val - small.quantity + 1;
  small.quantity = 1;
  removeCart(small, product2, remove2, btnProduct2, innerNumber2, itemDelete2);
});

itemDelete3.addEventListener("click", () => {
  val = val - large.quantity + 1;
  large.quantity = 1;
  removeCart(large, product3, remove3, btnProduct3, innerNumber3, itemDelete3);
});

function buttonAction(
  item,
  product,
  remove,
  btnProduct,
  innerNumber,
  itemDelete
) {
  addToCart();
  item.addQuantity();
  item.totalValue();
  product.innerText = `${item.name} - Total $${item.totalPrice}`;
  innerNumber.innerText = ` ${item.quantity}`;
  innerNumber.style.display = "flex";
  product.style.backgroundColor = "rgb(255, 116, 61)";
  itemDelete.style.display = "flex";
  remove.style.display = "flex";
  btnPay.style.display = "flex";
  noItems.style.display = "none";
  btnProduct.innerText = "➕";
  description();
  console.log(item);
}

function addToCart() {
  val = val + 1;
  itemsCart.innerText = val;
  cartButton.style.textShadow = "yellow 2px 0 10px";
  document.querySelector(".goBtn").style.display = "flex";
}

function removeCart(
  item,
  product,
  remove,
  btnProduct,
  innerNumber,
  itemDelete
) {
  if (val == 0) {
    cartButton.style.textShadow = "initial";
  } else {
    val = val - 1;
    itemsCart.innerText = val;
    item.reduceQuantiy();
    item.totalValue();
    if (item.quantity == 0) {
      remove.style.display = "none";
      itemDelete.style.display = "none";
      product.innerText = `${item.name}`;
      product.style.backgroundColor = "#ddd";
      btnProduct.innerText = "ADD TO CART";
    } else {
      product.innerText = `${item.name} - Total $${item.totalPrice}`;
      innerNumber.innerText = ` ${item.quantity}`;
    }
  }

  description();
}

const description = () => {
  if (val == 0) {
    infoP.innerText = "";
    total.innerText = "";
    shipping.innerText = "";
    tax.innerText = "";
    spanTotal.innerText = "";
    span4.innerText = "";
    span5.innerText = "";
    btnPay.style.display = "none";
    noItems.style.display = "flex";
    description1.innerText = "";
    span1.innerText = "";
    document.querySelector(".goBtn").style.display = "none";
  } else {
    if (keychain.quantity != 0) {
      description1.innerText = `${keychain.quantity} - ${keychain.name}`;
      span1.innerText = `$${keychain.totalPrice}`;
    } else {
      description1.innerText = "";
      span1.innerText = "";
    }
  }

  if (keychain.quantity == 0) {
    innerNumber1.style.display = "none";
  }
  if (small.quantity != 0) {
    description2.innerText = `${small.quantity} - ${small.name}`;
    span2.innerText = `$${small.totalPrice}`;
  } else {
    description2.innerText = "";
    span2.innerText = "";
    innerNumber2.style.display = "none";
  }

  if (large.quantity != 0) {
    description3.innerText = `${large.quantity} - ${large.name}`;
    span3.innerText = `$${large.totalPrice}`;
  } else {
    description3.innerText = "";
    span3.innerText = "";
    innerNumber3.style.display = "none";
  }

  if (val == 1) {
    infoP.innerText = `${val} item added 🛒`;
  } else if (val > 1) {
    infoP.innerText = `${val} items added 🛒`;
  }

  if (val >= 1) {
    let finalCheck =
      Number(keychain.totalPrice) +
      Number(small.totalPrice) +
      Number(large.totalPrice);

    shipping.innerText = "Shipping";
    tax.innerText = "Taxes";
    tax;
    total.innerText = "Total Amount";
    span4.innerText = "$5";
    span5.innerText = `$${((finalCheck * 8) / 100).toFixed(2)}`;
    spanTotal.innerText = `$${(finalCheck + 5 + (finalCheck * 8) / 100).toFixed(
      2
    )}`;
  }
};
