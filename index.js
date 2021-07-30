// Create an array to store the objects (Create data.js and link to HTML)
// Create objects 
// template:
// const data = [
//  {
//   id: "001-beetroot", // <- the item id matches the icon name in the assets/icons folder
//   name: "beetroot",
//   price: 0.35 // <- You can come up with your own prices
// }
// ]

//  const data = [
// //  {
// //   id: "001-beetroot", 
// //   name: "Beetroot",
// //   img: {
// // src="assets/icons/001-beetroot.svg",
// // alt="beetroot"
// //   },
// //   price: 0.50 
// // },
// {
//  ]

 const storeItems = [
 {
  id: "001-beetroot", 
  name: "Beetroot",
  price: 0.50 
},
{
  id: "002-carrot", 
  name: "Carrot",
  price: 0.50 
},
{
  id: "003-apple", 
  name: "Apple",
  price: 0.25 
},
{
  id: "004-apricot", 
  name: "Apricot",
  price: 0.25 
},
{
  id: "005-avocado", 
  name: "Avocado",
  price: 0.25 
},
{
  id: "006-bananas", 
  name: "Bananas",
  price: 0.25 
},
{
  id: "007-bell-pepper", 
  name: "Bell Pepper",
  price: 0.50
},
{
  id: "008-berry", 
  name: "Berry",
  price: 0.50 
},
{
  id: "009-blueberry", 
  name: "Blueberry",
  price: 0.25 
},
{
  id: "010-eggplant", 
  name: "Eggplant",
  price: 0.50
}
]

const cartItems = [];

// console.log(storeItems);

// Create bridge using: ul class="item-list store--item-list"
// Render function to create the items in "Greengrocers"
//input array // output obj
/* <li>
  <div class="store--item-icon">
    <img src="assets/icons/001-beetroot.svg" alt="beetroot" />
  </div>
  <button>Add to cart</button>
</li> */
/// button (Add to cart) has an addEventListener

const bridgeOne = document.querySelector(".store--item-list");
const bridgeTwo = document.querySelector(".cart--item-list");
const bridgeThree = document.querySelector(".total-number");

// console.log(bridgeOne);
// console.log(bridgeTwo);
// console.log(bridgeThree);

function renderStoreItems(array){
 for (let i = 0; i < array.length; i++) {
  const storeItem = array[i];

  const liItem = document.createElement("li");

  const divItem = document.createElement("div");
  divItem.className = "store--item-icon";

 const img = document.createElement("img");
 const imgSrc = `assets/icons/${storeItem.id}.svg`;
 const altSrc = storeItem.name;
 img.setAttribute("src",  imgSrc);
 img.setAttribute("alt" , altSrc);

  // console.log(img);
  divItem.append(img);
  liItem.append(divItem);

  const button = document.createElement("button");
  button.innerText = "Add to cart";

    //Event Listener
  button.addEventListener("click", () => {
      // console.log("Store Item onClick: ", storeItem);
      addToCart(storeItem, cartItems);
      renderCartItems(cartItems);
    });

  liItem.append(button);
  bridgeOne.append(liItem);
 }
}

// const listItems = renderStoreItems(storeItems);
// console.log(listItems);


// ACTION FUCNTIONS
// addToCart()
// - Does the item exist in the cart?
// - If the item doesn't exist in the cart add it to cart with a quantity of 1
// - If the item does exist in the cart then update the quantity by + 1

// input: an object that represents a storeItem, an array for the cart
// output: ??

// const storeItems - array
// const cartItems - array

function addToCart(storeItem , cartItems) {
  // console.log("Inside addToCart: ", storeItem, cartItems.length);

   let itemFound = false;

  // Check if storeItem exists in cartItems
  // If storeItem exists update the quantity

 for (let i = 0; i < cartItems.length; i++){
const cartItem = cartItems[i];
const cartItemId = cartItem.item.id;
const storeItemId = storeItem.id;

   if(cartItemId === storeItemId){
    cartItem.quantity += 1;

     itemFound = true;
  }
  }
  // console.log(!itemFound);
  // If storeItem doesn't exist in cart... add to cart

 if (!itemFound) {
  const newCartItem = {
    item: storeItem,
    quantity: 1
  };

  // Add newCartItem to the cart
  cartItems.push(newCartItem);
  }
}

// const beetroot = storeItems[0];
// const carrot = storeItems[1];

// addToCart(storeItems[0], cartItems);
// addToCart(storeItems[0], cartItems);
// addToCart(storeItems[1], cartItems);
// addToCart(storeItems[1], cartItems);
// addToCart(storeItems[1], cartItems);

// console.log(cartItems);



// //Function removefromCart

// function removefromCart(storeItem , cartItems) {

//    let itemFound = false;

//   // Check if storeItem exists in cartItems
//   // If storeItem exists update the quantity

//  for (let i = 0; i < cartItems.length; i++){
// const cartItem = cartItems[i];
// const cartItemId = cartItem.item.id;
// const storeItemId = storeItem.id;

//    if(cartItemId === storeItemId){
//     cartItem.quantity -= 1;

//      itemFound = true;
//   }
//   }
// // if the quantity = 0 unshift item ?
//  for (let i = 0; i < cartItems.length; i++){
// const cartItem = cartItems[i];
// const cartItemQuantity = artItem.quantity;

//    if(cartItemQuantity === 0){
//     cartItems.splice(cartItem)
//   }
// }
// }



// Create bridge using: ul class="item-list cart--item-list"
// Render function to create the li items
// input array // output obj
// li template: 
/* <li>
  <img
    class="cart--item-icon"
    src="assets/icons/001-beetroot.svg"
    alt="beetroot"
  />
  <p>beetroot</p>
  <button class="quantity-btn remove-btn center">-</button>
  <span class="quantity-text center">1</span>
  <button class="quantity-btn add-btn center">+</button>
</li> */

// Already declared => const bridgeTwo = document.querySelector(".cart--item-list");

// This function will render the items on the CartItems []

function renderCartItems(array){

 bridgeTwo.innerHTML = "";

 for (let i = 0; i < array.length; i++){
const cartItem = array[i];
const item = cartItem.item;

const liItem = document.createElement("li");
  
const img = document.createElement("img");
const imgSrc = `assets/icons/${item.id}.svg`;
const altSrc = `${item.name}`;
img.setAttribute("class",  "cart--item-icon");
img.setAttribute("src",  imgSrc);
img.setAttribute("alt" , altSrc);

liItem.append(img);

const textP = document.createElement("p");
textP.innerText = item.name;

liItem.append(textP);

const buttonMinus = document.createElement("button");
buttonMinus.className = "quantity-btn remove-btn center";
buttonMinus.innerText ="-";

 //Event Listener -
buttonMinus.addEventListener("click", () => {
      // console.log("Item onClick: ", item);
      removefromCart(item, cartItems);
      renderCartItems(cartItems);
    });

liItem.append(buttonMinus);

let span = document.createElement("span");
span.className = "quantity-text center";
span.innerText = cartItem.quantity;

console.log(cartItem);

liItem.append(span);

const buttonPlus = document.createElement("button");
buttonPlus.className = "quantity-btn add-btn center";
buttonPlus.innerText ="+";

 //Event Listener +
buttonPlus.addEventListener("click", () => {
      console.log("Item onClick: ", item);
      addToCart(item, cartItems);
      renderCartItems(cartItems);
    });

liItem.append(buttonPlus);

bridgeTwo.append(liItem);
 }
}

// renderCartItems(cartItems);
// console.log(cartItems);


//Create bridge using: <div> <span class="total-number">£0.00</span> </div>
// Render function to calculate the total
// function will use obj.price * <span class="quantity-text center">1</span> 

//[might have to go inside the second function due to local scope - think about it]

// Already declared => const bridgeThree = document.querySelector(".total-number");

function renderTotal(objct , times){
// for (let i = 0; i < zzzzz ; i++){}

bridgeThree.innerText ="";

  let prices = objct.price;
  let total = prices * times;

  bridgeThree.append(`£${total}`);
  return bridgeThree;
}


// const test = renderTotal(data[7] , 3);

//function to make everytime work:

function main() {
  renderStoreItems(storeItems);
}

main();
