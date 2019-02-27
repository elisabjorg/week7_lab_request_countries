const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (element) {
  this.element = element;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Country:data-loaded', (evt) => {
    const allCountriesData = evt.detail;
    this.populate(allCountriesData);
  });

  this.element.addEventListener('change', (evt) => {
  const selectedIndex = evt.target.value;
  PubSub.publish('SelectView:country-selected', selectedIndex);
});
};


SelectView.prototype.populate = function (countryData) {
  countryData.forEach((country, index) => {
    const option = document.createElement('option');
    option.textContent = country.name;
    option.value = index;
    this.element.appendChild(option);
  });

};


module.exports = SelectView;
