const directions = [
  'Starting point: Ironhack Paris',
  '← Head northwest on Bd Voltaire toward Rue Léon Frot',
  '← Turn left onto Rue Chanzy',
  '* Café Titon, 34 Rue Titon, 75011 Paris, France'
];


function obtainDirections(step) {
  return new Promise (function (resolve, reject) {
    setTimeout(() => {
      console.log( directions[step] );

      if (!directions[step]) reject('Instructions not found.')
      else resolve();
    }, 2000); 
    
  })
}


async function getCoffee() {
  await obtainDirections(0);
  await obtainDirections(1);
  await obtainDirections(2);
  await obtainDirections(3);
  console.log('You arrived at your destination!');
}


getCoffee();