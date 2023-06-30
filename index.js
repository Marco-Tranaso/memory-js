let lastselected = "";
let clicked = 0;
let i = 0;
let moves = 0;

function getElementAttrDataID(elem) {
  return [...elem.attributes].find((x) => x.name == "data-id")?.value;
}

function div_html(elem) {

  
  if (getElementAttrDataID(elem) == "css") {
    elem.classList.toggle("rotazione-y_css");
  }
  if (getElementAttrDataID(elem) == "html") {
    elem.classList.toggle("rotazione-y_html");
  }
  elem.classList.add("selected");
  i++;
  if (i == 2) {
    let mosse=document.getElementById('mosse');
    moves++;
    mosse.innerHTML="Mosse:" + moves;
    console.log("Mosse: " + moves);
    let items = document.getElementsByClassName("selected");
    if (lastselected == getElementAttrDataID(elem)) {
      let second = getElementAttrDataID(elem);
      setTimeout(() => {
        
        let ellist = document.querySelectorAll(
          'div[data-id="' + second + '"]'
        );
        ellist[0].classList.add("hidden");
        ellist[1].classList.add("hidden");
        let result = document.getElementsByClassName("hidden").length == 4 ? true : false;
        if (result){
          let vittoria=document.getElementById('vittoria');
          vittoria.innerHTML="Hai vinto in " + moves + "mosse!!!";
        }
        
        
        i = 0;
      }, 1500);
    } else {
      setTimeout(() => {
        for (let j = 0; j < items.length; j++) {
          let k = items[j];
          k.classList.remove("rotazione-y_html");
          k.classList.remove("rotazione-y_css");
        }

        i = 0;
      }, 500);
    }
  } else {
    lastselected = getElementAttrDataID(elem);
  }
}
