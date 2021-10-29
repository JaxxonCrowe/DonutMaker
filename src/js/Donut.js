class Donut {
    constructor(){
       this.donutQty = 0;
       this.autoClickerId = undefined;
       this.donutsEarned = 1;
       this.autoclickerQty = 0;
       this.multiplierQty = 0;
       this.autoclickerCost = 100;
       this.multiplierCost = 100;
    }

    makeDonut(){
        this.donutQty += this.donutsEarned;
    }

    getDonut(){
        return this.donutQty;
    }

    purchaseAutoClicker(){
        //do I have enough donuts to purchase clicker
        inputpurchaseAutoClicker.addEventListener("click",function(){
            
            if(donutQty.isNAN(Number.parseFloat(this.value))){
            alert("You do not have enough donuts to buy an Auto Clicker yet");
               
        }
        
        
        // increment the autoclickercount
        // subtractt he cost from our donutQty
        // increase the cost of the autoclicker
        });
}

    purchaseMultiplier(){

    }

    startInterval(){
        //check if the id is undefined
        //start interval -> auto
    }

    auto = () => {
        for(let i =0; i < this.autoclickerQty; i++){
            this.makeDonut();
        }
    }
    
}