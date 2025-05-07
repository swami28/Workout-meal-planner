//calorie counter form
const calorieCounter = document.getElementById("food-entry");
const entryDropdown = document.getElementById("entry-dropdown");
const addEntryButton = document.getElementById("add-entry");
const testButton = document.getElementById("test-button");

function addEntry() {
  const targetInputContainer = document.querySelector(
    `#${entryDropdown.value} .input-container`
  );
  const entryNumber =
    targetInputContainer.querySelectorAll(`input[type="text"]`).length + 1;
  const HTMLString = `<label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
                      <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
                      <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
                      <input 
                      type="number"
                      min="0"
                      id="${entryDropdown.value}-${entryNumber}-calories"
                      placeholder="Calories" />`;
  targetInputContainer.insertAdjacentHTML("beforeend", HTMLString);
}

function getCaloriesFromInputs() {
  const breakfastInputValue = document.querySelectorAll(
    "#breakfast input[type='number']"
  );
  const lunchInputValue = document.querySelectorAll(
    "#lunch input[type='number']"
  );
  const dinnerInputValue = document.querySelectorAll(
    "#dinner input[type='number']"
  );
  const snacksInputValue = document.querySelectorAll(
    "#snacks input[type='number'"
  );
  const breakfastInputName = document.querySelectorAll(
    "#breakfast input[type='text']"
  );
  const lunchInputName = document.querySelectorAll("#lunch input[type='text']");
  const dinnerInputName = document.querySelectorAll(
    "#dinner input[type='text']"
  );
  const snacksInputName = document.querySelectorAll(
    "#snacks input[type='text'"
  );

  const breakfastData = {};
  const lunchData = {};
  const dinnerData = {};
  const snacksData = {};

  breakfastInputName.forEach((input, index) => {
    const name = input.value;
    const calorie = breakfastInputValue[index]?.value || 0;
    breakfastData[name] = calorie;
  });
}

addEntryButton.addEventListener("click", addEntry);
testButton.addEventListener("click", getCaloriesFromInputs);
