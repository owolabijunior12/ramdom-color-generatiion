// get element from the DOM
const containerEl =document.querySelector(".container");
console.log(containerEl);
//for loop to creeat 100 element in the DOM
for (let index = 0; index < 400; index++) {
    //create a div element in the DOM
    const colorContainerEl = document.createElement("div");    
    //add a class to the div element 
    colorContainerEl.classList.add("color-container");    
    // create a div element in the div with the class of container
    containerEl.appendChild(colorContainerEl);
}
// get all element from the DOM with the class of color-container.
const colorContainerEls = document.querySelectorAll(".color-container");

genColor();
function genColor(){    
    //forEach loop to loop each element with the class of color-container.
    colorContainerEls.forEach((colorContainerEl)=>{        
        // whenever the newColorCode is called it when with call the function pickRandom
        const newColorCode = pickRandom();      
        // add css to the  element with the class of color-container.
        colorContainerEl.style.backgroundColor=`#${newColorCode}`        
        // add text to the element with the class of color-container
        colorContainerEl.innerText = `#${newColorCode}`
    })
}
pickRandom();
function pickRandom(){    
    //Color index number
    const char = "0123456789abcdef";    
    //Get 6 string from the char
    const colorLenght = 6;    
    //Empty string to generate color index
    let colorCode ="";    
    //For loop to get random string form the char strings.
    for (let index = 0; index <colorLenght; index++) {                
        //math.random to get number with decimal.
        //math.floor to get whole number for the math.random function  
        const randomNum = Math.floor(Math.random()* char.length) ;        
        //To get the substring with the encoded string in the char strings.
        colorCode += char.substring(randomNum,randomNum + 1); 
    }
    return colorCode;
}
