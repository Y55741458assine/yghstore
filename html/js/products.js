// Assuming there is a cart object or functionality to handle adding products to the cart
var cart = {
    items: [],
    addItem: function(product) {
      this.items.push(product);
      console.log('Product added to cart:', product);
      // Additional logic for updating the cart UI or performing other actions
    }
  };
  
  // Get all the "Add to Cart" buttons
  var addToCartButtons = document.querySelectorAll('.btn-add-to-cart');
  
  // Attach event listener to each button
  addToCartButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      // Get the product details
      var productItem = button.closest('.product-item');
      var productName = productItem.querySelector('.product-name').textContent;
      var productDescription = productItem.querySelector('.product-description').textContent;
      
      // Create a product object
      var product = {
        name: productName,
        description: productDescription
      };
      
      // Add the product to the cart
      cart.addItem(product);
    });
  });
  