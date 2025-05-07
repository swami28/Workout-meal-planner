function retrieveValues() {
  var food_data = [];
  let foodName = document.getElementById("food_name").value;
  let servingType = document.getElementById("serving_type").value;
  let servingSize = document.getElementById("serving_size").value;
  let calories = document.getElementById("calories").value;
  let protein = document.getElementById("protein").value;
  let fat = document.getElementById("fat").value;
  let carbohydrates = document.getElementById("carbohydrates").value;

  a[0] = foodName;
  a[1] = servingType;
  a[2] = servingSize;
  a[3] = calories;
  a[4] = protein;
  a[5] = fat;
  a[6] = carbohydrates;

  const tableBody = document.querySelector("#data-table tbody");
  food_data.forEach((item) => {
    const row = document.createElement("tr");
    Object.values(item).forEach((value) => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.appendChild(cell);
    });
    tableBody.append(row);
  });
}
