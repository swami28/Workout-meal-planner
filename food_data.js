document
  .getElementById("food-entry")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const food_name = document.getElementById("food-name").value;
    const serving_type = document.getElementById("serving-type").value;
    const serving_size = document.getElementById("serving-size").value;
    const calories = document.getElementById("calories").value;
    const protein = document.getElementById("protein").value;
    const fat = document.getElementById("fat").value;
    const carbohydrates = document.getElementById("Carbohydrate").value;

    console.log(
      food_name +
        " " +
        serving_type +
        " " +
        serving_size +
        " " +
        calories +
        " " +
        protein +
        " " +
        fat +
        " " +
        carbohydrates
    );
  });
