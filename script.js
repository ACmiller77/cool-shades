var redShades = {
  color: 'red',
  subtitle: 'Rock-n-Stroll',
  price: 199,
  img: 'images/product-red.jpg'
}


var greenShades = {
  color: 'green',
  subtitle: 'Rock-n-Stroll',
  price: 199,
  img: 'images/product-green.jpg'
}


var blueShades = {
  color: 'blue',
  subtitle: 'Rock-n-Stroll',
  price: 199,
  img: 'images/product-blue.jpg'
}


var blackShades = {
  color: 'black',
  subtitle: 'Rock-n-Stroll',
  price: 199,
  img: 'images/product-black.jpg'
}

var shades = [redShades, greenShades, blueShades, blackShades]

function mobileProduct(shade) {
  return `<div class="col peppers-product text-center">
         <img class="img-fluid" src="${shade.img}" alt="Peppers Rock-N-Stroll Red">
         <p class="product-title">${shade.subtitle}</p>
         <h3>${shade.color}</h3>
          <div class="circles">
            <div class="circle red" data-index="0"></div>
            <div class="circle green" data-index="1"></div>
            <div class="circle blue" data-index="2"></div>
            <div class="circle black" data-index="3"></div>
          </div>
         <p class="product-price">$${shade.price}</p>
         <div class="product-cta-container">
           <a href="#" class="btn btn-peppers btn-lg">Add to Cart</a>
         </div>
       </div>`
}

$(document).ready(function() {
  $('#mobile-products').html(mobileProduct(shades[0]) )
  $('#mobile-products').on('click', '.circle', function() {
    $('#mobile-products').html(mobileProduct(shades[$(this).data('index')]))
  })
})
