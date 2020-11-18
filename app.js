const country = document.querySelector('#Country');
const place = document.querySelector('#place');
const year = document.querySelector('#year');
const btn = document.querySelector('.btn');
const travellist = document.querySelector('#travel-list');

btn.addEventListener('click', function (e) {
  e.preventDefault();

  // Basic Validation
  if (country.value == '' && place.value == '' && year.value == '') {
    alert('Please input your information.');
  } else {
    const newRow = document.createElement('tr');

    // Creating new country
    const newCountry = document.createElement('th');
    newCountry.innerHTML = country.value;
    newRow.appendChild(newCountry);

    // Creating new places
    const newPlace = document.createElement('th');
    newPlace.innerHTML = place.value;
    newRow.appendChild(newPlace);

    // Creating new Year
    const newYear = document.createElement('th');
    newYear.innerHTML = year.value;
    newRow.appendChild(newYear);

    // Displaying in UI
    travellist.appendChild(newRow);
  }
  //clear value
  country.value="";
  place.value="";
  year.value="";
});