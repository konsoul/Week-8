function stretch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      console.log("done stretching");
    }, 1000);
  });
}

function runOnTreadmill() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      console.log("done running on treadmill");
    }, 500);
  });
}

function liftWeights() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      console.log("done lifting weights");
    }, 2000);
  });
}

// using promises .then to run each function.
function workout() {
  stretch()
    .then(runOnTreadmill)
    .then(liftWeights)
    .then(() => console.log("done working out"))
    .catch((err) => console.log(err));
}

// using await to run each function
// const workout = async () => {
//   try {
//     await stretch();
//     await runOnTreadmill();
//     await liftWeights();
//     console.log("done working out");
//   } catch (err) {
//     console.log(err);
//   }
// };

/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/

workout();
// should print out the following:
// done stretching
// done running on treadmill
// done lifting weights
// done working out
