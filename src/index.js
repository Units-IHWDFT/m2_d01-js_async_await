// Using fetch with async/await 
async function displayMissionPatches() {
  try {
    const response = await fetch('https://api.spacexdata.com/v4/launches');
    const jsonResponse = await response.json();

    console.log("Parsed response", jsonResponse);
  } catch (err) {
    // Handle error or a rejected Promise
    console.log("Something went wrong!", error);
  }
}

displayMissionPatches();