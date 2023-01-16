document.addEventListener('DOMContentLoaded', function () {
  var selectCategory = document.getElementsByClassName('select-category')[0]
  selectCategory.onchange = function () {
    var text = selectCategory.options[selectCategory.selectedIndex].text
    document.getElementsByClassName('selected-category')[0].innerText = text
  }
})
