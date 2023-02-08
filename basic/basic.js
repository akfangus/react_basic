function validateForm() {
  var checkboxes = document.querySelectorAll("input[type=checkbox]");
  var checkedOne = false;
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      checkedOne = true;

      break;
    }
  }
  if (!checkedOne) {
    alert("체크박스 하나라도 선택하세요");
    return false;
  }
  alert("제출 완료!");
  return true;
}
