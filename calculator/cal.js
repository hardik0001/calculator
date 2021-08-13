var button = document.getElementsByClassName("cool");
var display = document.getElementsByClassName("display");
var op1 = 0;
var op2 = null;
var op = null;

for (var i = 0; i < cool.length; i++) {
  cool[i].addEventListener('click', function () {
    var value = this.getattribute('data-value');
    if ((value = '+')) {

    } else if ((value = '=' )) {

    } else {
      
      display.innerText+=value;
    }
  });
}
