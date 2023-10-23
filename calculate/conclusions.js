// Show Conclusions Button
const showConclusionsButton = document.getElementById("conclusions-button");
const conclusionsElement = document.getElementById("conclusions");

showConclusionsButton.addEventListener("click", function () {
    const thermalTransmittance = parseFloat(resultTransmittanceElement.textContent.split(" ")[1]);
  
    if (!isNaN(thermalTransmittance)) {
        if (thermalTransmittance < 1.0) {
            conclusionsElement.textContent =
                "It complies with the required Transmittance for a high Andean zone because the value is less than 1.00.";
        } else {
            conclusionsElement.textContent =
                "Does NOT meet the required Transmittance for a high Andean zone because the value is greater than 1.00.";
        }
    } else {
        conclusionsElement.textContent = "Please calculate the thermal transmittance first.";
    }
});

// Return Button
document.addEventListener("DOMContentLoaded", function () {
  const returnButton = document.getElementById("return-button");

  returnButton.addEventListener("click", function () {
    window.location.href = "index.html";
  });
});
