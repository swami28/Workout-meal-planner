const workoutEntryContainer = document.querySelector(
  ".workout-entry-container-main"
);
const addCategoryButton = document.getElementById("add-category");
const addWorkoutButton = document.getElementById("add-workout");
const workoutDropDown = document.getElementById("workout-dropdown");

const chestWorkouts = [
  "Incline Dumbbell Press",
  "Incline Bench Press",
  "Flat Dumbbell Press",
  "Flat Bench Press",
  "Decline Dumbbell Press",
  "Decline Bench Press",
  "Chest-focused Dips",
  "Machine Chest flies",
  "Dumbbell Chest Flies",
  "Cable Chest Flies",
];

const backWorkouts = [
  "Lat Pulldowns",
  "Chest-Supported Wide Dumbbell Rows",
  "Chest-Supported Close-Grip Dumbbell Rows",
  "Barbell Rows",
  "Dumbbell Shrugs",
  "Smith-Machine Shrugs",
];

const legWorkouts = [
  "Barbell Back Squats",
  "Smith-Machine Back Squats",
  "Leg Extensions",
  "Machine Leg Press",
  "Sissy Squats",
  "Stiff-Legged Deadlift",
  "Lying-down Hamstring Curl",
  "Romanian Deadlifts",
  "Bulgarian Split Squats",
  "Single-Leg Machine Press",
];

const shoulderWorkouts = [
  "Dumbbell Lateral Raise",
  "Cable Lateral Raise",
  "Dumbbell Shoulder Press",
  "Barbell Shoulder Press",
  "Rear-delt Flies",
  "Rear-delt Cable Flies",
];

const tricepWorkouts = [
  "Bar Tricep Pushdowns",
  "Cable Tricep Pushdown",
  "Close-grip Barbell Press",
  "JM Press",
  "Tricep Dips",
  "Barbell Skullcrushers",
  "Dumbbell Skullcrushers",
  "Cable Tricep Extensions",
];

const bicepWorkouts = [
  "Supinated Bicep Dumbbell Curls",
  "Barbell Bicep Curls",
  "Hammer Curls",
  "Preacher Curls",
  "Spider   Curls",
  "Seated Dumbbell Biceps Curls",
];

const selectedWorkouts = [];

function addCategory() {
  // Add new category
  const newCategoryString = `
      <fieldset class="${workoutDropDown.value}">
          <legend>${workoutDropDown.value}</legend>
          <label>Max Sets Per Workout: <input type="number" placeholder="e.g. 4-8 sets"></input></label>
          <label>Max Reps Per Set: <input type="number" placeholder="e.g. 4-8 reps"></input></label>
          <button type="button">Add ${workoutDropDown.value} Workout</button>
          <select id="${workoutDropDown.value}-workouts"></select>
      </fieldset>`;

  // Check if workout category (fieldset) already exists.
  const workoutCategory = document.querySelector(`.${workoutDropDown.value}`);

  if (workoutCategory === null) {
    workoutEntryContainer.insertAdjacentHTML("beforeend", newCategoryString);
  }

  const chestWorkoutSelection = document.querySelector(
    ".Chest #Chest-workouts"
  );
  const backWorkoutSelection = document.querySelector(`.Back #Back-workouts`);
  const legsWorkoutSelection = document.querySelector(`.Legs #Legs-workouts`);
  const shoulderWorkoutSelection = document.querySelector(
    `.Shoulder #Shoulder-workouts`
  );
  const bicepsWorkoutSelection = document.querySelector(
    `.Biceps #Biceps-workouts`
  );
  const tricepsWorkoutSelection = document.querySelector(
    `.Triceps #Triceps-workouts`
  );

  if (chestWorkoutSelection !== null) {
    chestWorkouts.forEach((item) => {
      const option = document.createElement("option");
      option.value = item.toLowerCase();
      option.text = item;
      chestWorkoutSelection.appendChild(option);
    });
  }

  if (backWorkoutSelection !== null) {
    backWorkouts.forEach((item) => {
      const option = document.createElement("option");
      option.value = item.toLowerCase();
      option.text = item;
      backWorkoutSelection.appendChild(option);
    });
  }

  //Legs
  if (legsWorkoutSelection !== null) {
    legWorkouts.forEach((item) => {
      const option = document.createElement("option");
      option.value = item.toLowerCase();
      option.text = item;
      legsWorkoutSelection.appendChild(option);
    });
  }
  //Shoulders
  if (shoulderWorkoutSelection !== null) {
    shoulderWorkouts.forEach((item) => {
      const option = document.createElement("option");
      option.value = item.toLowerCase();
      option.text = item;
      shoulderWorkoutSelection.appendChild(option);
    });
  }
  //Biceps
  if (bicepsWorkoutSelection !== null) {
    bicepWorkouts.forEach((item) => {
      const option = document.createElement("option");
      option.value = item.toLowerCase();
      option.text = item;
      bicepsWorkoutSelection.appendChild(option);
    });
  }
  //Triceps
  if (tricepsWorkoutSelection !== null) {
    tricepWorkouts.forEach((item) => {
      const option = document.createElement("option");
      option.value = item.toLowerCase();
      option.text = item;
      tricepsWorkoutSelection.appendChild(option);
    });
  }
}

//Add workouts per container
workoutEntryContainer.addEventListener("click", (event) => {
  const target = event.target;

  if (target.tagName === "BUTTON") {
    //Chest Fieldset

    const workouts = [
      "Remove Chest Workout",
      "Remove Back Workout",
      "Remove Legs Workout",
      "Remove Shoulder Workout",
      "Remove Biceps Workout",
      "Remove Triceps Workout",
    ];

    if (workouts.includes(target.innerText)) {
      window.alert(target.closest("div").textContent);
      target.closest("fieldset").remove();
    }

    if (target.innerText === "Add Chest Workout") {
      const workoutSelection = document.querySelector(`#Chest-workouts`);

      if (selectedWorkouts.indexOf(workoutSelection.value) !== -1) {
        window.alert("Workout already added");
      } else {
        selectedWorkouts.push(workoutSelection.value);
        //UPDATE SELECTEDWORKOUTS VALUE WHEN REMOVED
        const addWorkout = `<fieldset><div><h3>${workoutSelection.value}</h3></div>
          <div><label for="${workoutSelection.value}-sets">Sets: </label><input type="number" id="${workoutSelection.value}-sets"></div>
          <div><label for="${workoutSelection.value}-sets">Reps: </label><input type="number" id="${workoutSelection.value}-sets"></div>
          <button type="button" >Remove Chest Workout </button></fieldset>`;

        const currentCategory = document.querySelector(`.Chest`);

        currentCategory.insertAdjacentHTML("beforeend", addWorkout);
      }
    }
    //Back Fieldset
    if (target.innerText === "Add Back Workout") {
      const workoutSelection = document.querySelector(`#Back-workouts`);

      if (selectedWorkouts.indexOf(workoutSelection.value) !== -1) {
        window.alert("Workout already added");
      } else {
        selectedWorkouts.push(workoutSelection.value);

        const currentCategory = document.querySelector(`.Back`);

        currentCategory.insertAdjacentHTML("beforeend", addWorkout);
      }
    }
    //Legs Fieldset
    if (target.innerText === "Add Legs Workout") {
      const workoutSelection = document.querySelector(`#Legs-workouts`);

      if (selectedWorkouts.indexOf(workoutSelection.value) !== -1) {
        window.alert("Workout already added");
      } else {
        selectedWorkouts.push(workoutSelection.value);

        const addWorkout = `<fieldset><div><h3>${workoutSelection.value}</h3></div>
          <div><label for="${workoutSelection.value}-sets">Sets: </label><input type="number" id="${workoutSelection.value}-sets"></div>
          <div><label for="${workoutSelection.value}-sets">Reps: </label><input type="number" id="${workoutSelection.value}-sets"></div>
          <button type="button" >Remove Legs Workout </button></fieldset>`;
        const currentCategory = document.querySelector(`.Legs`);

        currentCategory.insertAdjacentHTML("beforeend", addWorkout);
      }
    }
    //Shoulders Fieldset
    if (target.innerText === "Add Shoulder Workout") {
      const workoutSelection = document.querySelector(`#Shoulder-workouts`);

      if (selectedWorkouts.indexOf(workoutSelection.value) !== -1) {
        window.alert("Workout already added");
      } else {
        selectedWorkouts.push(workoutSelection.value);

        const addWorkout = `<fieldset><div><h3>${workoutSelection.value}</h3></div>
          <div><label for="${workoutSelection.value}-sets">Sets: </label><input type="number" id="${workoutSelection.value}-sets"></div>
          <div><label for="${workoutSelection.value}-sets">Reps: </label><input type="number" id="${workoutSelection.value}-sets"></div>
          <button type="button" >Remove Shoulder Workout </button></fieldset>`;
        const currentCategory = document.querySelector(`.Shoulder`);

        currentCategory.insertAdjacentHTML("beforeend", addWorkout);
      }
    }
    //Biceps Fieldset
    if (target.innerText === "Add Biceps Workout") {
      const workoutSelection = document.querySelector(`#Biceps-workouts`);

      if (selectedWorkouts.indexOf(workoutSelection.value) !== -1) {
        window.alert("Workout already added");
      } else {
        selectedWorkouts.push(workoutSelection.value);

        const addWorkout = `<fieldset><div><h3>${workoutSelection.value}</h3></div>
          <div><label for="${workoutSelection.value}-sets">Sets: </label><input type="number" id="${workoutSelection.value}-sets"></div>
          <div><label for="${workoutSelection.value}-sets">Reps: </label><input type="number" id="${workoutSelection.value}-sets"></div>
          <button type="button" >Remove Biceps Workout </button></fieldset>`;
        const currentCategory = document.querySelector(`.Biceps`);

        currentCategory.insertAdjacentHTML("beforeend", addWorkout);
      }
    }
    //Triceps Fieldset
    if (target.innerText === "Add Triceps Workout") {
      const workoutSelection = document.querySelector(`#Triceps-workouts`);

      if (selectedWorkouts.indexOf(workoutSelection.value) !== -1) {
        window.alert("Workout already added");
      } else {
        selectedWorkouts.push(workoutSelection.value);

        const addWorkout = `<fieldset><div><h3>${workoutSelection.value}</h3></div>
          <div><label for="${workoutSelection.value}-sets">Sets: </label><input type="number" id="${workoutSelection.value}-sets"></div>
          <div><label for="${workoutSelection.value}-sets">Reps: </label><input type="number" id="${workoutSelection.value}-sets"></div>
          <button type="button" >Remove Triceps Workout </button></fieldset>`;
        const currentCategory = document.querySelector(`.Triceps`);

        currentCategory.insertAdjacentHTML("beforeend", addWorkout);
      }
    }
  }
});

addCategoryButton.addEventListener("click", addCategory);
