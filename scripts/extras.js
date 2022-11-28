async function flashButton(color, timer) {
    switch(color) {
     case "yellow":
         yellowButton.style.backgroundColor="yellow";
         break;
     case "red":
         redButton.style.backgroundColor="red";
         break;
     case "blue":
         blueButton.style.backgroundColor="blue";
         break;
     case "green":
         greenButton.style.backgroundColor="green";
         break;
     default:
       // will never happen
     }
     
     let delay = await delayres(timer);

     yellowButton.style.backgroundColor="transparent";
     redButton.style.backgroundColor="transparent";
     blueButton.style.backgroundColor="transparent";
     greenButton.style.backgroundColor="transparent";
 
 }


 function addToSequence(sequence) {
    r = Math.floor(Math.random() * 4);
    switch(r) {
        case 0:
            return sequence.push("red");
            break;
        case 1:
            return sequence.push("yellow");
            break;
        case 2:
            return sequence.push("green");
            break;
        case 3:
            return sequence.push("blue");
            break;
        default:
    } 
}


 const delayres = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
  }