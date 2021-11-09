const inputDonutQty = document.getElementById("donutQty");
const inputAutoClickerQty = document.getElementById("AutoClickerQty");
const inputMultiplierQty = document.getElementById("MultiplierQty");

const clickerCost = document.getElementById("clickerCost");
const multiplierCost = document.getElementById("multiplierCost");

const makeDonutButton = document.getElementById("makeDonut");
const buyAutoClickerButton = document.getElementById("buyClicker");
const buyMultiplierButton = document.getElementById("buyMultiplier");

const numberOfDonutText = document.getElementById("numberOfDonuts");
const numberOfClickersText = document.getElementById("numberOfClickers");
const numberOfMultipliersText = document.getElementById("numberOfMultipliers");

let donutshop = new DonutShop();
let interval;

function buyClicker() {
   if(donutshop.numberOfDonuts < donutshop.clickerCost){
      alert("You need a total of " + donutshop.clickerCost.toFixed(0) + " donuts to buy a clicker.  Patience Grasshopper!!");
   } else {
      donutshop.buyClicker();
      clearInterval(interval);
      interval = setInterval(function(){
         donutshop.makeDonut(true);
         updateHTML();
      }, 1000);
   }

   updateHTML();
}

function makeDonut() {
   donutshop.makeDonut();
   updateHTML();
}

function buyMultiplier() {
   if(donutshop.numberOfDonuts < donutshop.multiplierCost){
      alert("You need a total of " + donutshop.multiplierCost.toFixed(0) + " donuts to buy a multiplier.  The wait will be worth it, I promise!!");
   }  else {
      donutshop.buyMultiplier();
   }
   updateHTML();
}

function updateHTML() {
   numberOfDonutText.innerText = donutshop.numberOfDonuts.toFixed(0);
   // handle this on script.js
   numberOfClickersText.innerText = donutshop.numberOfClickers.toFixed(0);
   numberOfMultipliersText.innerText = donutshop.numberOfMultipliers.toFixed(0);
   multiplierCost.innerText = donutshop.multiplierCost.toFixed(0);
   clickerCost.innerText = donutshop.clickerCost.toFixed(0);
   //donutsPerClick.innerText = Math.pow(1.2, donutshop.numberOfMultipliers).toFixed(0);
}

// modal setup - variables
let modalAboutFred = document.getElementById("aboutFred");
let modalGameInspiration = document.getElementById("gameInspiration");
let modalAboutJCrowe = document.getElementById("aboutJCrowe");

let modalAboutFredBtn = document.getElementById("modalAboutFredBtn");
let modalGameInspirationBtn = document.getElementById("modalGameInspirationBtn");
let modalAboutJCroweBtn = document.getElementById("modalAboutJCroweBtn");

let closeAboutFredBtn = document.getElementById("closeAboutFredBtn");
let closeGameInspirationBtn = document.getElementById("closeGameInspirationBtn");
let closeAboutJCroweBtn = document.getElementById("closeAboutJCroweBtn");

// modal setup - Button event listeners & functions
modalAboutFredBtn.addEventListener('click',openModalAboutFred);
function openModalAboutFred(){
   modalAboutFredBtn.style.display = "block";
}
closeAboutFredBtn.addEventListener('click', closeModalAboutFred);
function closeModalAboutFred(){
   modalAboutFredBtn.style.display = "none";
}

modalGameInspirationBtn.addEventListener('click',openModalGameInspiration);
function openModalGameInspiration(){
   modalGameInspiration.style.display = "block";
}
closeGameInspirationBtn.addEventListener('click', closeModalGameInspiration);
function closeModalGameInspiration(){
   modalGameInspiration.style.display = "none";
}

modalAboutJCroweBtn.addEventListener('click',openModalJCrowe);
function openModalAboutJCrowe(){
   modalAboutJCrowe.display.style = "block";
}
closeAboutJCroweBtn.addEventListener('click', closeModalAboutJCrowe);
function closeModalAboutJCrowe(){
   modalAboutJCrowe.display.style = "none";
}