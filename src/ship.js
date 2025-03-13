class Ship{
    constructor(){
        this.length() = length;  // Total Length of the Ship.
        this.damage() = 0; // Number of times the ship has been hit.
        this.sunk()   = false;
    }
    hit(){
        this.damage++
    };
    isSunk(damage, length){
        if(damage >= length)
            this.sunk = true;
        else
            this.damage = false;
    };
}
export { Ship };