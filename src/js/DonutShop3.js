class DonutShop{
    constructor(){
        this.numberOfDonuts = 85; 
        this.numberOfClickers = 0;
        this.numberOfMultipliers = 0;
        this.clickerCost = 100; 
        this.multiplierCost = 20;
    }
    
    // Function to Make a Donut 
    makeDonut(auto){
        if(auto != undefined){
            this.numberOfDonuts += Math.pow(1.2, this.numberOfMultipliers) * this.numberOfClickers;
        } else {
            this.numberOfDonuts += Math.pow(1.2, this.numberOfMultipliers);
        } 
    }

    buyClicker(){
        if (this.numberOfDonuts >= this.clickerCost) {
            this.numberOfDonuts -= this.clickerCost;
            this.numberOfClickers++;
            this.clickerCost *= 1.1;
        }
     }

     buyMultiplier(){
        if (this.numberOfDonuts >= this.multiplierCost) {
            this.numberOfDonuts -= this.multiplierCost
            this.numberOfMultipliers++
            this.multiplierCost *= 1.1;
        }
    }
}
