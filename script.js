function myFunction1() {
  document.getElementById("myDropdown1").classList.toggle("show");
}

function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

function myFunction3() {
  document.getElementById("myDropdown3").classList.toggle("show");
}

function logToReg() {
	document.getElementById("reg").classList.toggle("show");
	document.getElementById("log").classList.toggle("nshow");
}

function slider() {
var counter = 1;
    setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 3){
        counter = 1;
      }
    }, 10000);
}
slider();


function menu() {
  document.getElementById("nav").classList.toggle("active"); 
  document.getElementById("cl").classList.toggle("showcl"); 
}

function search() {
  document.getElementById("sform").classList.toggle("showcl");
}