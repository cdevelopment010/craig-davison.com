// Header section
// Control burger bar

let burgerBar = document.getElementById('burgerBar'); 
let navigation = document.getElementById('navigation'); 

burgerBar.addEventListener("click", function() {
    this.classList.toggle("change");
    navigation.classList.toggle("hidden");
})