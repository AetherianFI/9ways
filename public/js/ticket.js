function increment(index) {
  var numElement = document.querySelectorAll('.num')[index];
  var totalElement = document.getElementById('total');
  var ticketTypeElement = document.getElementById('ticket-type');


  if (ticketTypeElement.textContent !== '') {
    return;
  }

  var num = parseInt(numElement.textContent);
  if (num < 1) {
    num++;
    numElement.textContent = num;

    var total = parseInt(totalElement.textContent);
    total += index === 0 ? 400 : (index === 1 ? 200 : (index === 2 ? 15000 : 200));
    totalElement.textContent = total;

    if ((index === 0 || index === 1 || index === 2) && total > 0) {
      if (index === 0) {
        ticketTypeElement.textContent = 'Day ticket';
      } else if (index === 1) {
        ticketTypeElement.textContent = 'Single ticket';
      } else if (index === 2) {
        ticketTypeElement.textContent = 'Monthly pass';
      }
    }
  }
}

function decrement(index) {
  var numElement = document.querySelectorAll('.num')[index];
  var totalElement = document.getElementById('total');
  var ticketTypeElement = document.getElementById('ticket-type');

  var num = parseInt(numElement.textContent);
  if (num > 0 && num <= 1) {
    num--;
    numElement.textContent = num;

    var total = parseInt(totalElement.textContent);
    total -= index === 0 ? 400 : (index === 1 ? 200 : (index === 2 ? 15000 : 200));
    totalElement.textContent = total;

    if (total === 0) {
      ticketTypeElement.textContent = '';
    }
  }
}


function purchase() {
  var email = document.getElementById('email').value;
  var total = document.getElementById('total').textContent;
  var ticketType = document.getElementById('ticket-type').textContent;
  
  // Get current date and time
  var currentTime = new Date();
  var purchaseTime = currentTime.toLocaleString(); // Format the date and time as a string
  
  var content = "Purchase Details\n\nTotal: " + total + "₦\nTicket Type: " + ticketType + "\nPurchase Time: " + purchaseTime + "\n\n";
  var blob = new Blob([content], { type: 'text/plain' });
  var link = document.createElement('a');
  link.download = 'purchase_details.txt';
  link.href = window.URL.createObjectURL(blob);
  link.click();
}
