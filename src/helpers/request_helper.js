const RequestHelper = function(url) {
  this.url = url;
};

RequestHelper.prototype.get = function (onComplete) { //3. added this
  const xhr = new XMLHttpRequest();
  xhr.open('GET', this.url); //4.changed to this.url
  xhr.setRequestHeader('Accept', 'application/json');

  xhr.addEventListener('load', () => {
    if (xhr.status !== 200){
      return;
    }
    const jsonString = xhr.responseText;
    const data = JSON.parse(jsonString);

    onComplete(data) //5.
  })

  xhr.send();
};



module.exports = RequestHelper;
