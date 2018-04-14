
var element = document.getElementById("button-tag-clickable")
if (window.console) {
  function load() {
    console.log('CONSOLE TEXT> PRZYKLADOWY TEKST!')
  }
}
$(document).ready(function(){
    $("#btn-animate1").click(function(){
        $("#box").animate({height: "300px"});
    });
    $("#btn-animate2").click(function(){
        $("#box").animate({height: "100px"});
    });
});
