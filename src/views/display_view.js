const PubSub = require('../helpers/pub_sub.js');

const DisplayView = function (container) {
  this.container = container;
};

DisplayView.prototype.bindEvents = function () {
  PubSub.subscribe('Country:data-ready', (evt) => {
    const countryDetails = evt.detail;
    this.publish(countryDetails);
  })
};

DisplayView.prototype.publish = function(countryData) {
  this.container.innerHTML = '';

   const countryName = this.createElement('h2', countryData[0].name);
   this.container.appendChild(countryName);

   const image = document.createElement('img');
   image.classList.add('medium-image');
   image.src = countryData[0].flag;
   this.container.appendChild(image)

   const countryRegion = this.createElement('h3', countryData[0].region);
   this.container.appendChild(countryRegion);

   const countryLanguages = this.createList(countryData[0].languages);
   this.container.appendChild(countryLanguages);
   console.log(countryLanguages);

};

DisplayView.prototype.createList = function (languagesArray) {
 const list = document.createElement('ul');

 languagesArray.forEach((language) => {
   const listItem = document.createElement('li');
   listItem.textContent = language.name;
   list.appendChild(listItem);
 });

 return list;
};

DisplayView.prototype.createElement = function (elementType, text) {
 const element = document.createElement(elementType);
 element.textContent = text;
 return element;
};

module.exports = DisplayView;
