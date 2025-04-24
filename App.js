let lastScroll = window.scrollY;
const header = document.getElementById("header1");
const logo = document.getElementById("logo1");
const button = document.getElementById("button");

window.addEventListener("scroll", function() {
    let currentScroll = window.scrollY;

    if (currentScroll > lastScroll) {
    header.classList.add("scrolled");
    logo.src = "https://raw.githubusercontent.com/collegecoders/HTML_CSS_Projects/c7caaaecd295b7292cfe6ded2d0442c17e19b9d3/App_Villa/Home/logo.svg";
    button.classList.add("scroll-button");
    } 
    else {
    header.classList.remove("scrolled");
    logo.src = "https://raw.githubusercontent.com/collegecoders/HTML_CSS_Projects/c7caaaecd295b7292cfe6ded2d0442c17e19b9d3/App_Villa/Home/white-logo.svg";
    button.classList.remove("scroll-button");
    }
    lastScroll = currentScroll;
}); 

let inputElement=document.getElementById("input");

inputElement.addEventListener("keydown",function(){
    inputElement.classList.add("input");
});