let display=document.getElementById('display');

let buttons=Array.from(document.getElementsByClassName("button"));

buttons.map(button=>{
    button.addEventListener("click",(ev)=>{

switch(ev.target.innerText){
    case 'clear':
        display.innerText='';
        break;

        case "=":
            try{

                display.innerText=eval(display.innerText);
            }catch{
                display.innerText="Only numbers are allowed"
            }
            break;
        case '←':
            if(display.innerText)
            {
                display.innerText=display.innerText.slice(0,-1);
            }
            break;

        
        default:
            display.innerText+=ev.target.innerText
}

    });

})
