document.addEventListener("DOMContentLoaded", function () {
  const materialSearch = document.getElementById("materialSearch");
  const materialThickness = document.getElementById("materialThickness");
  const resultTransmittanceElement = document.getElementById(
    "resultTransmittance"
  );

  const materials = [
    {
      name: "High-Density Foam Insulation Board",
      description:
        "Type of thermal insulation material known for its excellent insulating properties. It is often used in construction for its high R-value and energy-saving features.",
      thermal_conductivity: 0.025,
      image_file: "high_density_foam.jpg",
    },
    {
      name: "Fiberglass Batt Insulation",
      description:
        "Popular choice for its affordability and ease of installation. It is used in walls, attics, and crawl spaces for thermal insulation.",
      thermal_conductivity: 0.032,
      image_file: "fiberglass_batt.jpg",
    },
    {
      name: "Polystyrene Foam Sheets",
      description:
        "Lightweight and durable. They are commonly used in construction as insulation materials for their moisture resistance and thermal insulation properties.",
      thermal_conductivity: 0.035,
      image_file: "polystyrene_foam.jpg",
    },
    {
      name: "Cementitious Fireproofing",
      description:
        "Fire-resistant material applied to structural components. It offers protection against high temperatures and is used in industrial and commercial buildings.",
      thermal_conductivity: 0.06,
      image_file: "cementitious_fireproofing.jpg",
    },
    {
      name: "Reflective Foil Insulation",
      description:
        "Consists of layers of aluminum foil and plastic materials. It reflects heat and is used to provide thermal insulation in attics and walls.",
      thermal_conductivity: 0.03,
      image_file: "reflective_foil.jpg",
    },
    {
      name: "Cellulose Insulation",
      description:
        "Made from recycled paper products. It is an eco-friendly choice and provides effective thermal insulation in homes and buildings.",
      thermal_conductivity: 0.04,
      image_file: "cellulose_insulation.jpg",
    },
    {
      name: "Aerogel Insulation",
      description:
        "Highly efficient insulating material known for its low thermal conductivity. It is used in aerospace and extreme temperature applications.",
      thermal_conductivity: 0.015,
      image_file: "aerogel_insulation.jpg",
    },
    {
      name: "Spray Foam Insulation",
      description:
        "Versatile material that expands upon application. It creates a tight seal and is used for both thermal insulation and air sealing.",
      thermal_conductivity: 0.028,
      image_file: "spray_foam.jpg",
    },
    {
      name: "Blown-In Fiberglass Insulation",
      description:
        "Made of tiny glass fibers and is applied by blowing or spraying. It is used to insulate attics and walls for thermal efficiency.",
      thermal_conductivity: 0.031,
      image_file: "blown_in_fiberglass.jpg",
    },
    {
      name: "Polyisocyanurate Board Insulation",
      description:
        "Type of rigid foam insulation. It is known for its high R-value and is used in roofs, walls, and foundations for thermal insulation.",
      thermal_conductivity: 0.024,
      image_file: "polyisocyanurate_insulation.jpg",
    },
  ];

  // Function for filling the Material Selection Menu
  function fillMaterialOptions() {
    materials.forEach((material) => {
      const option = document.createElement("option");
      option.value = material.name;
      option.textContent = material.name;
      materialSearch.appendChild(option);
    });
  }

  // Function for selecting Materials with double click
  function handleMaterialDoubleClick() {
    const selectedOption = materialSearch.options[materialSearch.selectedIndex];
    if (selectedOption) {
      const selectedMaterial = document.createElement("div");
      selectedMaterial.textContent = selectedOption.text;
      selectedMaterial.classList.add("selected-material");
      selectedMaterialsList.appendChild(selectedMaterial);
    }
  }

  // Calculus of Thermal Transmittance
  function calculateThermalTransmittance() {
    const selectedMaterials = Array.from(materialSearch.selectedOptions).map(
      (option) => option.value
    );
    const thickness = parseFloat(materialThickness.value);

    if (!selectedMaterials.length || isNaN(thickness)) {
      resultTransmittanceElement.textContent =
        "Please select materials and provide thickness";
      return;
    }

    let totalResistance = 0;
    selectedMaterials.forEach((selectedMaterial) => {
      const material = materials.find((mat) => mat.name === selectedMaterial);
      if (material) {
        const materialResistance = thickness / material.thermal_conductivity;
        totalResistance += 1 / materialResistance;
      }
    });

    if (!isNaN(totalResistance) && totalResistance > 0) {
      const thermalTransmittance = 1 / totalResistance;

      resultTransmittanceElement.textContent = `Thermal Transmittance: ${thermalTransmittance.toFixed(
        2
      )} (W/m²·K)`;
    }
  }

  const selectedMaterialsList = document.getElementById(
    "selectedMaterialsList"
  );
  fillMaterialOptions();
  materialSearch.addEventListener("dblclick", handleMaterialDoubleClick);

  // Associate the calculation with the "Thermal Transmittance" button
  const calculateTransmittanceButton = document.getElementById(
    "calculateTransmittance"
  );
  calculateTransmittanceButton.addEventListener(
    "click",
    calculateThermalTransmittance
  );
});

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

