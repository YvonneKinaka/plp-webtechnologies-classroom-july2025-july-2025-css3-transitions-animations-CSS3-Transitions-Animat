// Global variable
let shopName = "Sweet Treats Cupcake Shop";

// Function with parameters and return value
function calculateTotal(quantity, pricePerCupcake) {
  return quantity * pricePerCupcake;
}

// Function to create confirmation message
function createConfirmationMessage(name, total) {
  return `Thank you, ${name}! 🎉 Your order at ${shopName} costs KSh ${total}.`;
}

// Demonstrating scope
function scopeDemo() {
  let localNote = "This message is local to scopeDemo()";
  console.log(localNote); // Works (local scope)
  console.log(shopName);  // Works (global scope)
}

// Event listener for order form
document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Get inputs
  let name = document.getElementById("customerName").value;
  let quantity = parseInt(document.getElementById("quantity").value);

  // Assume cupcakes cost KSh 250 each
  let price = 250;

  // Use function with return value
  let total = calculateTotal(quantity, price);

  // Build confirmation message
  let message = createConfirmationMessage(name, total);

  // Show confirmation popup
  let popup = document.getElementById("confirmation");
  document.getElementById("confirmationMessage").textContent = message;
  popup.classList.remove("hidden");

  // Run scope demo
  scopeDemo();
});
