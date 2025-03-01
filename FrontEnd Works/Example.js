let bgContainerEl=document.getElementById("bgContainer");
let headingEl=document.getElementById("heading");
let themeInputEl=document.getElementById("themeUserInput");
let lightTheme = "URL('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";
let darkTheme = "URL('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";


function userInput(event){
    if(event.key==="Enter"){
        let themeValue=themeInputEl.value;

        if(themeValue==="Light"){
            bgContainerEl.style.backgroundImage=lightTheme;
            headingEl.style.color='#014d40'; 
        } 
        
        else if(themeValue==="Dark")
        {
            bgContainerEl.style.backgroundImage=darkTheme;
            headingEl.style.color='#ffffff';
        } 
        
        else 
        {
            alert("Enter Valid theme");
        }

        themeInputEl.value="";
    }
}

themeInputEl.addEventListener("keydown",userInput);
