
let a=0;
function div_html(elem) {
    elem.classList.toggle("rotazione-y_html");
    elem.classList.add("selected")
    a++;
    if (a==2){
        let items=document.getElementsByClassName('selected');
        setTimeout(() => {
            for (let b=0;b<items.length;b++)
            {
                let c=items[b];
                c.classList.toggle("rotazione-y_html");
            }
            
            a=0;
            c.classList.remove("rotazione-y_html");
        }, 1500);
        
    }
    
}