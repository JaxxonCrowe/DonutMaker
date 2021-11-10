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

// Game functions in Grid Area 2 - in order of appearance top to bottom
function makeDonut() {
   donutshop.makeDonut();
   updateHTML();
}

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

function buyMultiplier() {
   if(donutshop.numberOfDonuts < donutshop.multiplierCost){
      alert("You need a total of " + donutshop.multiplierCost.toFixed(0) + " donuts to buy a multiplier.  The wait will be worth it, I promise!!");
   }  else {
      donutshop.buyMultiplier();
   }
   updateHTML();
}

// Function to use within the Game Functions above that will update the numbers
function updateHTML() {
   numberOfDonutText.innerText = donutshop.numberOfDonuts.toFixed(0);
   // handle this on script.js
   numberOfClickersText.innerText = donutshop.numberOfClickers.toFixed(0);
   numberOfMultipliersText.innerText = donutshop.numberOfMultipliers.toFixed(0);
   multiplierCost.innerText = donutshop.multiplierCost.toFixed(0);
   clickerCost.innerText = donutshop.clickerCost.toFixed(0);
   //donutsPerClick.innerText = Math.pow(1.2, donutshop.numberOfMultipliers).toFixed(0);
}

// Modal setup - variables
const modalAboutFred = document.getElementById("aboutFred");
const modalGameInspiration = document.getElementById("gameInspiration");
const modalAboutJCrowe = document.getElementById("aboutJCrowe");

const modalAboutFredBtn = document.getElementById("modalAboutFredBtn");
const modalGameInspirationBtn = document.getElementById("modalGameInspirationBtn");
const modalAboutJCroweBtn = document.getElementById("modalAboutJCroweBtn");

const closeAboutFredBtn = document.getElementById("closeAboutFredBtn");
const closeGameInspirationBtn = document.getElementById("closeGameInspirationBtn");
const closeAboutJCroweBtn = document.getElementById("closeAboutJCroweBtn");

// Modal setup - Button event listeners & functions
// About Fred Modal
modalAboutFredBtn.addEventListener('click',openModalAboutFred);
function openModalAboutFred(){
   modalAboutFred.style.display = "block";
}
closeAboutFredBtn.addEventListener('click', closeModalAboutFred);
function closeModalAboutFred(){
   modalAboutFred.style.display = "none";
}

// Game Inspiration Modal
modalGameInspirationBtn.addEventListener('click',openModalGameInspiration);
function openModalGameInspiration(){
   modalGameInspiration.style.display = "block";
}
closeGameInspirationBtn.addEventListener('click', closeModalGameInspiration);
function closeModalGameInspiration(){
   modalGameInspiration.style.display = "none";
}

// About the Programmer Modal
modalAboutJCroweBtn.addEventListener('click',openModalAboutJCrowe);
function openModalAboutJCrowe(){
   modalAboutJCrowe.style.display = "block";
}
closeAboutJCroweBtn.addEventListener('click', closeModalAboutJCrowe);
function closeModalAboutJCrowe(){
   modalAboutJCrowe.style.display = "none";
}