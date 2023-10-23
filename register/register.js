// Upload image
document.addEventListener("DOMContentLoaded", function () {
  const fileInput = document.querySelector('input[type="file"]');
  const fileNameDisplay = document.getElementById("file-name");

  fileInput.addEventListener("change", function () {
    if (fileInput.files.length > 0) {
      const fileName = fileInput.files[0].name;
      fileNameDisplay.textContent = fileName; // Show File name
      fileNameDisplay.style.fontWeight = "bold";
      fileNameDisplay.style.display = "block";
    } else {
      fileNameDisplay.textContent = ""; // Clean text if there is no file
      fileNameDisplay.style.display = "none"; // Hide file name
    }
  });
});

// Return Button
document.addEventListener("DOMContentLoaded", function () {
  const returnButton = document.getElementById("return-button");

  returnButton.addEventListener("click", function () {
    // Redirect to Home page
    window.history.back();
  });
});

// Submit Form
function submitForm() {
  const materialName = document.getElementById("materialName");
  const description = document.getElementById("description");
  const thermalConductivity = document.getElementById("thermalConductivity");
  const materialImage = document.getElementById("materialImage");

  materialName.value = "";
  description.value = "";
  thermalConductivity.value = "";
  materialImage.value = "";

  alert("Register submitted successfully!");
}
