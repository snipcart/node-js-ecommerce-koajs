$(function () {
  document
    .querySelector('#amount')
    .addEventListener('change', function (evt) {
      const amount = evt.target.value
      let data = $('#donate').data()
      data.itemPrice = amount
      data.itemId = `donation`
      data.itemUrl = `${data.baseUrl}?amount=${amount}`
    })
});