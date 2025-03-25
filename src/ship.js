class Ship{
    constructor(type){
        this.type = type;
        this.length = this.findLength();  // Total Length of the Ship.
        this.damage = 0; // Number of times the ship has been hit.
        this.sunk   = false;
    }
    hit(){
        this.damage++
        if(this.damage >= this.length)
            this.sink();
    };
    sink(){
            this.sunk = true;
    };
    findLength(){
        if(this.type == 'ca')
            return 5;
        else if(this.type == 'bb')
            return 4
        else if(this.type == 'cr'||this.type =='su')
            return 3
        else if(this.type == 'dd')
            return 2
        else 
            throw new Error('parameter type not a ship')
    };
}
export { Ship };