let quantities = [0, 0, 0];
const prices = [5.99, 5.99, 29.99];

function updateTotal() {
  let total = 0;
  for (let i = 0; i < quantities.length; i++) {
    total += quantities[i] * prices[i];
  }
  document.getElementById("total").textContent = total.toFixed(2);
}

function increment(index) {
  quantities[index]++;
  document.getElementsByClassName("num")[index].textContent = quantities[index];
  updateTotal();
}

function decrement(index) {
  if (quantities[index] > 0) {
    quantities[index]--;
    document.getElementsByClassName("num")[index].textContent = quantities[index];
    updateTotal();
  }
}
