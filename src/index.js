// Using fetch with Promise syntax - then() and catch()
fetch('https://api.spacexdata.com/v4/launches')
  .then((response) => { 
    return response.json();
  })
  .then((jsonResponse) => {
    console.log("Parsed response", jsonResponse);
  })
  .catch((err) => console.log("Something went wrong!", error));