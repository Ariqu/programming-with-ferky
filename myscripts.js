

  var element = document.getElementById("p-tag-clickable")


  if (element) {
    element.addEventListener("click", myFunction);
  }

  function myFunction() {
    console.log('siema to kuba wy chore dziki');
  }
  function ne(o){
     if(document.getElementById(o).style.display=='') document.getElementById(o).style.display = 'none';
     else document.getElementById(o).style.display='';
