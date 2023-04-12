//1. Select the "Add to Cart" button
//2. Select the cart
//3. Initialize the cart total
//4. Add a click event listener to the "Add to Cart" button
//5. Get the product information
//6. Create a new cart item
//7. Add the cart item to the cart
//8. Update the cart total

  document.getElementById("add-to-cart1").addEventListener("click", addToCart1);
  document.getElementById("add-to-cart2").addEventListener("click", addToCart2);
  document.getElementById("add-to-cart3").addEventListener("click", addToCart3);
  
  function addToCart1(){
    let p = parseInt(document.getElementById("product1").value);
    let c = parseInt(document.getElementById("cart_total").innerHTML);
    sum = (c + p);
    document.getElementById("cart_total").innerHTML = '';
    document.getElementById("cart_total").innerHTML = sum+'.00';
    addProducts('Product 1 at price of: $' + p);

  }

  function addToCart2(){
    let p = parseInt(document.getElementById("product2").value);
    let c = parseInt(document.getElementById("cart_total").innerHTML);
    sum = (c + p);
    document.getElementById("cart_total").innerHTML = '';
    document.getElementById("cart_total").innerHTML = sum+'.00';
    addProducts('Product 2 at price of: $' + p);
  }

  function addToCart3(){
    let p = parseInt(document.getElementById("product3").value);
    let c = parseInt(document.getElementById("cart_total").innerHTML);
    sum = (c + p);
    document.getElementById("cart_total").innerHTML = '';
    document.getElementById("cart_total").innerHTML=sum+'.00';
    addProducts('Product 3 at price of: $' + p);
  }

  function addProducts(str){
    var ul = document.getElementById("allProd");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(str +'.00'));
    ul.appendChild(li);
  }

