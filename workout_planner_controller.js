const workoutEntryContainer = document.querySelector(
  ".workout-entry-container-main"
);

const getTotalSetsReps = document.getElementById("get-total-sets-reps");

//`<fieldset id="workout-field"><h3>${workoutSelection.value} <label for="${workoutSelection.value}-sets">Sets: </label><input id="${workoutSelection.value}-sets" type="number" placeholder="4"/><label for="${workoutSelection.value}-reps">Reps: </label><input id="${workoutSelection.value}-reps" type="number" placeholder="4"/><button type="button">X</button></h3></fieldset>`

{
  /* <fieldset>
  <div>
    <h3>${workoutSelection.value}</h3>
  </div>
  <div>
    <label for="${workoutSelection.value}-sets">Sets: </label>
    <input type="number" id="${workoutSelection.value}-sets">
  </div>
  <div>
    <label for="${workoutSelection.value}-sets">Reps: </label>
    <input type="number" id="${workoutSelection.value}-sets">
  </div>
  <button type="button" >Remove Chest Workout </button>
</fieldset>; */
}

function removeFieldset(value) {
  // const fieldset = document.getElementById("" + value);

  // if (fieldset) {
  //   fieldset.remove();
  // }
  window.alert(value);
}
function getWorkoutSets() {
  const getChestSets = document.querySelectorAll(
    ".workout-entry-container-main .Chest #Chest-workout"
  );
}
