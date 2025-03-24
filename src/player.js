import { Gameboard } from "./gamboard";
function genStart(){
    let arr = [ Math.floor(Math.random()*10) , Math.floor(Math.random()*10) ]
    return arr;
}
function genEnd(start, length){
    let horizontal = null;
    let vertical = null;
    let directionChance = Math.floor(Math.random()*3)
    if(directionChance === 1){
        horizontal = true;
        vertical = false;
    } else if(directionChance === 2){
        horizontal = false;
        vertical = true;
    } else {
        throw new Error('computer direction error')
    }
    if(horizontal&&start[0]+length<9){
        return [start[0]+length,start[1]];
    } else if(horizontal&&start[0]+length>=9){
        return [start[0]-length,start[1]];
    } else if(vertical&&start[1]+length<9){
        return [start[0],start[1]+length];
    } else if(vertical&&start[1]+length>=9){
        return [start[0],start[1]-length];
    } else {
        throw new Error('computer direction error')
    }
}

class Player {
    constructor(){
        this.playerType =  null;
        this.Gameboard = new Gameboard();
    }
    setComputer(){
        if(this.playerType = 'computer'){
            this.Gameboard.placeShip('ca', genStart(), genEnd(start, 5));
            this.Gameboard.placeShip('bb', genStart(), genEnd(start, 4));
            this.Gameboard.placeShip('cr', genStart(), genEnd(start, 3));
            this.Gameboard.placeShip('su', genStart(), genEnd(start, 2));
            this.Gameboard.placeShip('dd', genStart(), genEnd(start, 1));
        }
    }
}
export { Player }