class Ship{
    constructor(type, start, end){
        this.length() = findLength(start, end);  // Total Length of the Ship.
        this.damage() = 0; // Number of times the ship has been hit.
        this.sunk()   = false;
        this.type = type;
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