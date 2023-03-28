let number_increase = document.querySelector(".number");
let add = document.querySelector(".plus");
let subtract = document.querySelector(".minus");
let close = document.querySelector(".close_icon");
let backdrop = document.querySelector(".backdrop");
let shoes = document.querySelector(".shoes");
let addtocart = document.querySelector(".add_to_cart");
let mainpicture = document.querySelectorAll(".main_picture");
let totalamount = document.querySelector(".total_amount");
let actualamount = document.querySelector(".actual_amount");
let cart = document.querySelector(".cart_icon");
let checkoutitems = document.querySelector(".checkout_items");
let avatar = document.querySelector(".avatar");
let checkoutpicture = document.querySelector(".checkout_picture");
let checkoutbutton = document.querySelector(".checkout_button");
let itemindicator = document.querySelector(".item_indicator");
let deleteicon = document.querySelector(".delete");
let next = document.querySelectorAll(".next");
let previous = document.querySelectorAll(".previous");
let slidesContainer = document.querySelector(".preview_pix");
let cartwriting = document.querySelector(".writing");
let amount = document.querySelector(".amount");
let hamburgermenu = document.querySelector(".hamburger-menu");
let backdrop_pix = document.querySelector(".backdrop_pix");
let navbar = document.querySelector(".navbar")

add.addEventListener("click", event => {
    event.preventDefault();
    const number = parseInt(number_increase.innerHTML);
    number_increase.innerHTML = number + 1;
});

subtract.addEventListener("click", event => {
    event.preventDefault();
    const number = parseInt(number_increase.innerHTML);
    if (number > 0) {
        number_increase.innerHTML = number - 1;
    };
});
function close_backdrop(){
    backdrop.style.display = "none";
    navbar.style.visibility= "visible";
};
shoes.addEventListener("click", event =>{
    event.preventDefault();
    backdrop.style.display = "block";
    navbar.style.visibility = "hidden";
});
function navtoggle(){
  backdrop.style.display = "block"
  hamburgermenu.style.display = "block";
  backdrop_pix.style.display = "none";
  navbar.style.visibility= "hidden";
};

var tempmessage = cartwriting.innerHTML;

function cartempty(){
  itemindicator.innerHTML = "0";
  number_increase.innerHTML = 0;
  cartwriting.innerHTML = "Your cart is empty";
  checkoutbutton.style.display= "none";
  deleteicon.style.display= "none";
  amount.style.display= "none";
  checkoutpicture.style.display="none";
  cartwriting.setAttribute("align","center");
};



addtocart.addEventListener("click", event =>{
    event.preventDefault();
    if (number_increase.innerHTML > 0){
      itemindicator.innerHTML = number_increase.innerHTML;
      total  = 125.00 * number_increase.innerHTML;
      totalamount.innerHTML = `$${total}.00`;
      actualamount.innerHTML = `$125.00 x ${number_increase.innerHTML}`; 
      console.log("yes");
      cartwriting.innerHTML = tempmessage;
      checkoutbutton.style.display= "block";
      deleteicon.style.display= "block";
      amount.style.display= "block";
      checkoutpicture.style.display= "block";

    }
    else if (number_increase.innerHTML < 0){
      cartwriting.innerHTML = "Your cart is empty";
      cartwriting.setAttribute("align","center");
      actualamount.style.visibility= "hidden";
     }
    else if (number_increase.innerHTML === 0) {
      itemindicator.style.display = "none";
      checkoutitems.style.display = "none";
      cartwriting.innerHTML = "Your cart is empty";
      cartwriting.setAttribute("align","center");
    };

});


 
function showcheckout(){
  if (checkoutitems.style.display == "none"){
    checkoutitems.style.display = "block";
  }
  else{
    checkoutitems.style.display = "none";
    itemindicator.innerHTML = number_increase.innerHTML;
  };
 
}
avatar.onmouseover = function (){
  checkoutitems.style.display = "block";
};
avatar.onmouseout = function(){
  checkoutitems.style.display = "none";
}





var images = document.querySelectorAll(".picture");

for (var i = 0; i < images.length; i++) {
  images[i].onmouseover = function() {
    this.style.cursor = "hand";
    this.style.border = "3px solid var(--Orange)";
    this.style.opacity = "0.6";
  };
  images[i].onmouseout = function() {
    this.style.cursor = "pointer";
    this.style.border = "none";
    this.style.opacity = "1";
  };
}
function changeImageOnClick(event) {
  // debugger;
  var targetElement = event.srcElement;
  // debugger;
  if (targetElement.className === "picture") {
    mainpicture.forEach(main_picture =>{
      main_picture.src = targetElement.getAttribute("src");
    });
  };
};

function changeImage(event) {
  // debugger;
  var targetElement = event.srcElement;
  // debugger;
  if (targetElement.className === "tiny_shoes_images") {
    shoes.src = targetElement.getAttribute("src");
  };
};

var i = 0;

for(let n = 0; n < next.length; n++){
  next[n].addEventListener("click", event =>{
    event.preventDefault();
    if(i != (images.length - 1) || i == 0){
      i += 1;
      mainpicture.forEach(main_picture =>{
        main_picture.src = images[i].src;
      });
    console.log(i);
    }
    else{
      i = 0;
      mainpicture.forEach(main_picture =>{
        main_picture.src = images[i].src;
      });
   }
  })
}


for(let n = 0; n < previous.length; n++){
  previous[n].addEventListener("click", event =>{
    event.preventDefault();
    if(i != 0){
       i -= 1;
      mainpicture.forEach(main_picture =>{
        main_picture.src = images[i].src;
      });
      console.log(i);
    }
    else{
      i = i + images.length;
      mainpicture.forEach(main_picture =>{
        main_picture.src = images[i].src;
      });
   }
  })
};