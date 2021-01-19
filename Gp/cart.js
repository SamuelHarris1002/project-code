"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Review Assigment

   Shopping Cart Form Script
   
   Author: Samuel Harris
   Date:   5-18-20
   
   Filename: co_cart.js
   
   Function List
   =============
   
   calcCart()
      Calculates the cost of the customer order
      
   formatNumber(val, decimals)
      Format a numeric value, val, using the local
      numeric format to the number of decimal
      places specified by decimals
      
   formatUSACurrency(val)
      Formats val as U.S.A. currency
   
*/ 

window.addEventListener("load", function(){
   var cartForm = doucemnt.forms.cart;
   cartForm.elements.modelQty.onchange = calcCart;
   for(var i = 0; i < .length; i++){

   }});


function calcCart(){
    var orderCost = formatNumber(249, 95);
    var shipcost = orderCost * quantity;
}








function formatNumber(val, decimals) {
   return val.toLocaleString(undefined, {minimumFractionDigits: decimals, 
                                         maximumFractionDigits: decimals});
}

function formatUSCurrency(val) {
   return val.toLocaleString('en-US', {style: "currency", currency: "USD"} );
}


///for()

//var productsInCart = new Array(); //it should be array of products in cart ID's
// .products are product listed in page
$('#').each(function(){
   var product = $(this);
   var id = $(this).attr('id').substring(4);
   if( productsInCart.indexOf(id) > 0 )
     //here product is in cart
   else
     //here products isnt in cart
   //do here what u want to do with single item (product)

});

document.querySelector(#product) = Var

varphoto1 = document.querySelector(id)
var photo = "product";


function addImagetoNextPage(){
  photo = Product(#)
}

if(button("Add to Cart") === clicked){
   move("img") to href="cart.html"
}