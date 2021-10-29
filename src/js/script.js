const inputDonutQty = document.getElementById("donutQty");
// const inputDonutQty = document.getElementById("makeDonut");
// const autoclickerQty = document.getElementById("autoClicker");
// const donutMultiplierQty = document.getElementById("donutMultiplier");
// const autoclickerCost = document.getElementById("autoclickerCost");
// const multiplierCost = document.getElementById("multiplierCost");
const makeDonutButton = document.getElementById("makeDonut");
// const autoclickerButton = document.getElementById("autoclick");
// const click = document.getElementById("makeDonut");
// const multiplierButton = document.getElementById("multiply");
//const donutMakingRate = document.getElementById("rate");

let donutInput = document.getElementById("donutQty");

let shop = new Donut();

makeDonutButton.addEventListener("click",function(){
   
    shop.makeDonut();
    console.log("Make Donut button clicked     "+shop.donutQty);

    
    
    inputDonutQty.value = "++++++++++"+shop.donutQty;
});

//autoClicker.addEventListener("click",function(){
//    console.log(`Buy Autoclicker button clicked`);
//    donutQty.auto_clicker();
//});

//multiplierButton.addEventListener("click",function(){
//    console.log(`Buy Multiplier button clicked`);
//    donutQty.donutMultiplier();
//});