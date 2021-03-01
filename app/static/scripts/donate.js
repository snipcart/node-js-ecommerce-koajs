const getUrl = window.location;
const baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];

(function () {
  document
    .querySelector('#amount')
    .addEventListener('change', function (evt) {
      const amount = evt.target.value
      let buyButton = document.querySelector('#donate')
      buyButton.dataset.itemPrice = amount
      buyButton.dataset.itemId = `donation`
      buyButton.dataset.itemUrl = `${baseUrl}?amount=${amount}`
    })
})();