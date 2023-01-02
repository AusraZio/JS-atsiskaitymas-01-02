/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

async function fetchCars() {
  const response = await fetch(ENDPOINT);
  const cars = await response.json();

  cars.forEach(manufacturer => {
    const manufacturerCard = document.createElement('div');
    manufacturerCard.classList.add('manufacturer-card');
    
    const manufacturerName = document.createElement('h2');
    manufacturerName.textContent = manufacturer.brand;
    manufacturerCard.appendChild(manufacturerName);

    const modelsList = document.createElement('ul');
    manufacturer.models.forEach(model => {
      const modelItem = document.createElement('li');
      modelItem.textContent = model;
      modelsList.appendChild(modelItem);
    });
    manufacturerCard.appendChild(modelsList);

    document.body.appendChild(manufacturerCard);
  });
}

fetchCars();