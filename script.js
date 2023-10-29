function display(val) {

    document.getElementById("result").value += val;
  
  }
  
  function solve() {
  
    let x = document.getElementById("result").value;
  
    let y = eval(x);
  
    document.getElementById("result").value = y;
  
  }
  
  function del(){

    document.getElementById("result").value = document.getElementById("result").value.slice(0,-1);
  }

  function clearScreen() {
  
    document.getElementById("result").value = "";
  
  }