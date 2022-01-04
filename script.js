const inputs=Array.from(document.querySelectorAll('input'));


let lastOne;
let inbetween=false;
makeChecked=(event)=>{
    // document.querySelector('input').checked=true;
    
    if(event.shiftKey && lastOne){
        inputs.forEach(input=>{
            if(input===lastOne || input ===event.target){
                inbetween=!inbetween;
            }
            if(inbetween){
                input.checked=true;
            }
        })
    }
    lastOne=event.target;
}
inputs.forEach(input=> input.addEventListener('click',makeChecked));
