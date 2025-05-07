const workoutEntryContainer = document.querySelector(
  ".workout-entry-container-main"
);
const addCategoryButton = document.getElementById("add-category");
const addWorkoutButton = document.getElementById("add-workout");
const workoutDropDown = document.getElementById("workout-dropdown");
const getTotalSets = document.getElementById("get-total");
const workoutListTag = document.getElementById("targeted-muscle");

const workoutMapList = {
  chestWorkoutsMap: new Map([
    ["c1", "Incline Dumbbell Press"],
    ["c2", "Incline Bench Press"],
    ["c3", "Flat Dumbbell Press"],
    ["c4", "Flat Bench Press"],
    ["c5", "Decline Dumbbell Press"],
    ["c6", "Decline Bench Press"],
    ["c7", "Chest-Focused Dips"],
    ["c8", "Machine Chest Flies"],
    ["c9", "Dumbbell Chest Flies"],
    ["c10", "Cable Chest Flies"],
  ]),

  backWorkoutsMap: new Map([
    ["b1", "Lat Pulldowns"],
    ["b2", "Chest-Supported Wide Dumbbell Rows"],
    ["b3", "Chest-Supported Close-Grip Dumbbell Rows"],
    ["b4", "Barbell Rows"],
    ["b5", "Dumbbell Shrugs"],
    ["b6", "Smith-Machine Shrugs"],
    ["b7", "Back Extensions"],
    ["b8", "Close-Grip Machine Rows"],
    ["b9", "Wide-Grip Barbell Rows"],
    ["b10", "Lat Pullovers"],
  ]),

  legsWorkoutsMap: new Map([
    ["l1", "Barbell Back Squats"],
    ["l2", "Smith-Machine Back Squats"],
    ["l3", "Leg Extensions"],
    ["l4", "Machine Leg Press"],
    ["l5", "Sissy Squats"],
    ["l6", "Stiff-Legged Deadlift"],
    ["l7", "Lying-down Hamstring Curl"],
    ["l8", "Romanian Deadlifts"],
    ["l9", "Bulgarian Split Squats"],
    ["l10", "Quad Focused Single-Leg Machine Press"],
    ["l11", "Glute Focused Single-Leg Machine Press"],
    ["l12", "Quad Focused Bulgarian Split Squats"],
    ["l13", "Glute Focused Bulgarian Split Squats"],
    ["l14", "Glute Extensions"],
    ["l15", "Smith-Machine Calf Raise"],
    ["l16", "Seated Calf Raise"],
  ]),

  shouldersWorkoutsMap: new Map([
    ["s1", "Dumbbell Lateral Raise"],
    ["s2", "Cable Lateral Raise"],
    ["s3", "Dumbbell Shoulder Press"],
    ["s4", "Barbell Shoulder Press"],
    ["s5", "Rear-delt Flies"],
    ["s6", "Rear-delt Cable Flies"],
  ]),

  tricepsWorkoutsMap: new Map([
    ["t1", "Bar Tricep Pushdowns"],
    ["t2", "Cable Tricep Pushdown"],
    ["t3", "Close-grip Barbell Press"],
    ["t4", "JM Press"],
    ["t5", "Tricep Dips"],
    ["t6", "Barbell Skullcrushers"],
    ["t7", "Dumbbell Skullcrushers"],
    ["t8", "Cable Tricep Extensions"],
  ]),

  bicepsWorkoutsMap: new Map([
    ["b1", "Supinated Bicep Dumbbell Curls"],
    ["b2", "Barbell Bicep Curls"],
    ["b3", "Hammer Curls"],
    ["b4", "Preacher Curls"],
    ["b5", "Spider Curls"],
    ["b6", "Seated Dumbbell Biceps Curls"],
    ["b7", "Incline Dumbbell Curls"],
    ["b8", "Bayesian Curls"],
  ]),
};

const targetedMusclesMap = new Map([
  ["c1", ["cm1", "cm2", "sm1"]],
  ["c2", ["cm1", "cm2", "sm1"]],
  ["c3", ["cm2", "cm3"]],
  ["c4", ["cm2", "cm3"]],
  ["c5", ["cm3"]],
  ["c6", ["cm3"]],
  ["c7", ["cm3"]],
  ["c8", ["cm2", "cm3"]],
  ["c9", ["cm2"]],
  ["c10", ["cm2"]],
  ["c11", ["cm1"]],
  ["c12", ["cm1"]],
  ["s3", ["sm1"]],
  ["s4", ["sm1"]],
  ["s1", ["sm2"]],
  ["s2", ["sm2"]],
  ["s5", ["sm3"]],
  ["s6", ["sm3"]],
  ["b2", ["bm1", "bm2", "bm2"]],
  ["b4", ["bm2", "bm5"]],
  ["b7", ["bm3"]],
  ["b5", ["bm4"]],
  ["b6", ["bm4"]],
  ["b1", ["bm5"]],
  ["l1", ["lm1"]],
  ["l2", ["lm1"]],
  ["l3", ["lm1"]],
  ["l4", ["lm1"]],
  ["l5", ["lm1"]],
  ["l6", ["lm2"]],
  ["l7", ["lm2"]],
  ["l8", ["lm3"]],
  ["l15", ["lm4"]],
  ["l16", ["lm4"]],
  ["b7", ["bm1"]],
  ["b3", ["bm4"]],
  ["t1", ["tm1", "tm3"]],
  ["t2", ["tm1", "tm3"]],
  ["t3", ["tm2", "tm3"]],
  ["t4", ["tm2", "tm3"]],
]);

const targetedMusclesTranslation = new Map([
  ["cm1", "Upper Chest"],
  ["cm2", "Middle Chest"],
  ["cm3", "Lower Chest"],
  ["sm1", "Front Delts"],
  ["sm2", "Mid Delts"],
  ["sm3", "Rear Delts"],
  ["bm1", "Upper Back"],
  ["bm2", "Middle Back"],
  ["bm3", "Lower Back"],
  ["bm4", "Trapezius"],
  ["bm5", "Lats"],
  ["lm1", "Quads"],
  ["lm2", "Hamstrings"],
  ["lm3", "Glutes"],
  ["lm4", "Calves"],
  ["bm1", "Long Head Biceps"],
  ["bm2", "Short Head Biceps"],
  ["bm3", "Brachialis"],
  ["bm4", "Brachioradialis"],
  ["tm1", "Long Head Triceps"],
  ["tm2", "Medial Head Triceps"],
  ["tm3", "Lateral Head Triceps"],
]);

const currentTargetedMuscles = [];

const currentTargetedMusclesV2 = [];
const uniqueTargetedMuscle = [];

const parametersMap = new Map();

const workoutMaps = {
  chestWorkouts: new Map(),
  backWorkouts: new Map(),
  legsWorkouts: new Map(),
  shouldersWorkouts: new Map(),
  bicepsWorkouts: new Map(),
  tricepsWorkouts: new Map(),
};

function addCategory() {
  // Add new category
  const newCategoryString = `
    <fieldset id="${workoutDropDown.value}">
        <legend>${workoutDropDown.value}</legend>
        <input id="${workoutDropDown.value}-total" type="number" placeholder="10"></input>
        <button type="button" id="add-workout-${workoutDropDown.value}">Add Workout</button>
        <select id="${workoutDropDown.value}-workouts"></select>
        <button type="button" id="category-remove-${workoutDropDown.value}">X</button>
    </fieldset> <br />`;

  // Check if workout category (fieldset) already exists.
  const workoutCategory = document.querySelector(`#${workoutDropDown.value}`);
  if (workoutCategory === null) {
    console.log(workoutCategory);
    workoutEntryContainer.insertAdjacentHTML("beforeend", newCategoryString);
    const workoutSelection = document.querySelector(
      `#${workoutDropDown.value} #${workoutDropDown.value}-workouts`
    );

    const workoutMapReference = `${workoutDropDown.value.toLowerCase()}WorkoutsMap`;
    if (workoutMapList[workoutMapReference] instanceof Map) {
      populateWorkoutOption(
        workoutSelection,
        workoutMapList[workoutMapReference]
      );
    }
  } else {
    window.alert("Category already added!");
  }
}

//populate dynamically generated workout selection with values
function populateWorkoutOption(selection, workouts) {
  if (selection !== null) {
    workouts.forEach((value) => {
      const option = document.createElement("option");
      option.value = value;
      option.text = value;
      selection.appendChild(option);
    });
  }
}

//Add workouts per container
workoutEntryContainer.addEventListener("click", (event) => {
  const target = event.target;

  if (target.tagName === "INPUT" && target.type === "number") {
    getTargetValue(target);
  }

  if (target.tagName === "BUTTON") {
    if (target.id.startsWith("category-remove-")) {
      const targetMapReference = getTargetMap(target, 16, "add-remove");
      if (targetMapReference) {
        handleRemoveCategory(target, targetMapReference);
      }
    } else if (target.id.startsWith("remove-workout-")) {
      const targetMapReference = getTargetMap(target, 15, "add-remove");
      if (targetMapReference) {
        removeWorkout(targetMapReference, target);
        target.closest("fieldset").remove();
      }
    } else if (target.id.startsWith("add-workout-")) {
      const targetMapReference = getTargetMap(target, 12, "add-remove");
      if (targetMapReference) {
        // target.id.substring(12) gives "Chest", "Back", etc.
        addWorkout(target.id.substring(12), targetMapReference);
      }
    }
  }
});

addCategoryButton.addEventListener("click", addCategory);

function addWorkout(category, selectedWorkoutMap) {
  const workoutSelection = document.querySelector(`#${category}-workouts`);
  const workoutEntryNumber =
    document.querySelectorAll(`#${category} fieldset`).length + 1;

  if ([...selectedWorkoutMap.values()].includes(workoutSelection.value)) {
    window.alert("Workout already added");
    // <legend>${workoutDropDown.value} Workout ${workoutEntryNumber}</legend>
  } else {
    const addWorkout = `<fieldset class="${workoutSelection.value}">
        <div class="name-container">
          <h3>${workoutSelection.value}</h3>
        </div>
        <div class="sets-container">
          <label for="${category}-sets|${workoutSelection.value}">Sets: </label><input type="number" id="${category}-sets|${workoutSelection.value}">
        </div>
        <div class="reps-container">
          <label for="${category}-reps|${workoutSelection.value}">Reps: </label><input type="number" id="${category}-reps|${workoutSelection.value}">
        </div>
          <button type="button" id="remove-workout-${category}">X</button>
        </fieldset>`;
    selectedWorkoutMap.set(workoutEntryNumber, workoutSelection.value);

    const currentCategory = document.querySelector(`#${category}`);
    currentCategory.insertAdjacentHTML("beforeend", addWorkout);
    addTargetedMuscle(
      category.toLowerCase(),
      workoutSelection.value,
      selectedWorkoutMap
    );
  }
}

function getTargetMap(target, prefixLength) {
  const targetMap =
    target.id.substring(prefixLength).toLowerCase() + "Workouts";
  const targetMapReference = workoutMaps[targetMap];

  if (targetMapReference instanceof Map) {
    return targetMapReference;
  }
  return null;
}

function removeWorkout(selectedWorkoutMap, target) {
  for (let [key, value] of selectedWorkoutMap) {
    if (value === target.closest("fieldset").className) {
      selectedWorkoutMap.delete(key);
      target.closest("fieldset").remove();
    }
  }
}

function handleRemoveCategory(target, selectedWorkoutMap) {
  selectedWorkoutMap.clear();
  target.closest("fieldset").remove();
}

function retrieveInputsVal() {
  const chestInputs = document.querySelectorAll(".Chest input");

  chestInputs.forEach((items) => {
    console.log(items.id + " " + items.value);
  });
}

function getTargetValue(target) {
  target.addEventListener("input", function () {});
}

function addTargetedMuscle(category, selectedWorkout, selectedWorkoutMap) {
  const targetCategory = category + "WorkoutsMap";

  selectedWorkoutMap.forEach((selectedWorkout) => {
    workoutMapList[targetCategory].forEach((workout, key) => {
      if (
        selectedWorkout === workout &&
        !currentTargetedMuscles.includes(key)
      ) {
        currentTargetedMuscles.push(key);
        //console.log(currentTargetedMuscles);
      }
    });
  });
  console.log("currentTargetedMuscles contents: ", currentTargetedMuscles);
  populateWorkoutListTag();
}

function populateWorkoutListTag() {
  //Clears the list content
  workoutListTag.innerHTML = "";

  currentTargetedMuscles.forEach((workoutKey) => {
    targetedMusclesMap.get(workoutKey).forEach((values) => {
      if (!currentTargetedMusclesV2.includes(values)) {
        currentTargetedMusclesV2.push(values);
      }
    });
  });
  currentTargetedMusclesV2.forEach((muscleKey) => {
    if (
      !uniqueTargetedMuscle.includes(targetedMusclesTranslation.get(muscleKey))
    ) {
      uniqueTargetedMuscle.push(targetedMusclesTranslation.get(muscleKey));
    }
  });

  uniqueTargetedMuscle.forEach((muscle) => {
    const listContent = document.createElement("li");
    listContent.textContent = muscle;
    workoutListTag.append(listContent);
  });
}

getTotalSets.addEventListener("click", retrieveInputsVal);
