document.getElementById("calculate-btn").addEventListener("click", function () {
  const rate = parseFloat(document.getElementById("rate").value);
  const liters = parseFloat(document.getElementById("liters").value);

  if (!isNaN(rate) && !isNaN(liters)) {
    const total = (rate * liters).toFixed(2);
    document.getElementById("output").textContent = `Total Cost: AED ${total}`;
  } else {
    document.getElementById("output").textContent = "Please enter valid numbers.";
  }
});
