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


 const data = [
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


// Create bridge using: ul class="item-list store--item-list"
// Render function to create the items in "Greengrocers"
//input array // output obj
/* <li>
  <div class="store--item-icon">
    <img src="assets/icons/001-beetroot.svg" alt="beetroot" />
  </div>
  <button>Add to cart</button>
</li> */
/// button (Add to cart) has an addEventListener [HARD - think about it later]

const bridgeOne = document.querySelector(".store--item-list");
const bridgeTwo = document.querySelector(".cart--item-list");
const bridgeThree = document.querySelector(".total-number");

// console.log(bridgeOne);
// console.log(bridgeTwo);
// console.log(bridgeThree);

function renderList(array){
 for (let i = 0; i < array.length; i++) {
  const liItem = document.createElement("li");

  const divItem = document.createElement("div");
  divItem.className = "store--item-icon";

  liItem.append(divItem);

 const img = document.createElement("img");
 const imgSrc = `assets/icons/${array[i].id}.svg`;
 const altSrc = `array[i].name`;
 img.setAttribute("src",  imgSrc);
 img.setAttribute("alt" , altSrc);

  // console.log(img);
  divItem.append(img);

  const button = document.createElement("button");
  button.innerText = "Add to cart";

    //Event Listener

  button.addEventListener("click", () =>{renderCartList(array[i])
});

  liItem.append(button);

  bridgeOne.append(liItem);
 }
 return bridgeOne;
}

const listItems = renderList(data);
// console.log(listItems);


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

function renderCartList(objct){
  const liItem = document.createElement("li");
  
  const img = document.createElement("img");
  const imgSrc = `assets/icons/${objct.id}.svg`;
  const altSrc = `objct.name`;
  img.setAttribute("class",  "cart--item-icon");
  img.setAttribute("src",  imgSrc);
  img.setAttribute("alt" , altSrc);

  liItem.append(img);

  const textP = document.createElement("p");
  textP.innerText = objct.name;

  liItem.append(textP);

  const buttonMinus = document.createElement("button");
  buttonMinus.className = "quantity-btn remove-btn center";
  buttonMinus.innerText ="-";

  let span = document.createElement("span");
  span.className = "quantity-text center";
  span.innerText = 1;

  const buttonPlus = document.createElement("button");
  buttonPlus.className = "quantity-btn add-btn center";
  buttonPlus.innerText ="+";
  
   //Event Listener +

buttonPlus.addEventListener('click', event => {span.innerText++});

   //Event Listener -

buttonMinus.addEventListener('click', event => {span.innerText--});

// console.log(span.innerText);  - always 1 so it's not counting
console.log(span.value);

  liItem.append(buttonMinus);
  liItem.append(span);
  liItem.append(buttonPlus);

  bridgeTwo.append(liItem);

//   if(Number(span.innerText) < 0){
//  bridgeTwo.remove(liItem);
// }

  return bridgeTwo
}

// const testTwo = renderCartList(data[0]);
// console.log(testTwo);

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
  return total;
}


const test = renderTotal(data[4] , 3);