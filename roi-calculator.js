document.getElementById("roi-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const mqls = parseFloat(document.getElementById("mqls").value);
  const closeRate = parseFloat(document.getElementById("close-rate").value) / 100;
  const acv = parseFloat(document.getElementById("acv").value);

  const additionalRevenue = mqls * closeRate * acv;

  // Assuming the cost of services is known or can be calculated
  const costOfServices = 1000; // Replace this with the actual cost of services

  const roi = ((additionalRevenue - costOfServices) / costOfServices) * 100;

  document.getElementById("roi-result").innerHTML = `ROI: ${roi.toFixed(2)}%`;
});