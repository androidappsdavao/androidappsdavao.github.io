// When the document loads, this function will be called
document.addEventListener(
  "DOMContentLoaded",
  function() {
    openTab("London");
  }
);


function openTab(tabID) {
  var elems = document.getElementsByClassName('tabContent');
  for (var i=0;i<elems.length;i+=1){
    if(elems[i].id==tabID) elems[i].style.display = 'block';
    else elems[i].style.display = 'none';
  }
}
