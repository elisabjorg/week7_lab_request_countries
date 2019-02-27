const Country = require('./models/countries.js');
const SelectView = require('./views/select_view.js');
const DisplayView = require('./views/display_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const country = new Country();
  country.getData();

  const countryDisplay= document.querySelector('#country');
  const countryData = new DisplayView(countryDisplay);
  countryData.bindEvents();

  const countryDropdown = document.querySelector('#countries');
  const countryView = new SelectView(countryDropdown);
  countryView.bindEvents();

  country.bindEvents();
});
