const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const Country = function () {

};

Country.prototype.getData = function () {
  const request = new RequestHelper('https://restcountries.eu/rest/v2/all');
  request.get( (data) => {
  PubSub.publish('Country:data-loaded', data)
  });
};

Country.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:country-selected', (evt) => {
  const countryIndex = evt.detail;

  const request = new RequestHelper('https://restcountries.eu/rest/v2/all');
  request.get( (data) => {
  const countryDetails = data.splice(countryIndex, 1);
  PubSub.publish('Country:data-ready', countryDetails);
  });
});
}


module.exports = Country;
