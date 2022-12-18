function clearInput(screen){
    screen.current.innerHTML="";
}

function setInput(screen,text){
    screen.current.innerHTML+=text;
}

function calc(screen){
    screen.current.innerHTML=eval(screen.current.innerHTML)
}


export {
    clearInput,setInput,calc
}