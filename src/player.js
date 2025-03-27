import { Gameboard } from "./gamboard";
function genStart(){
    let arr = [ Math.floor(Math.random()*10) , Math.floor(Math.random()*10) ]
    return arr;
}
function genCoordinates(length){
    let start = genStart();
    let horizontal = null;
    let vertical = null;
    let directionChance = Math.floor(Math.random()*2)

    if(directionChance === 0){
        horizontal = true;
        vertical = false;
    } else if(directionChance === 1){
        horizontal = false;
        vertical = true;
    } else { 
        throw new Error('computer direction error')
    }

    if(horizontal&&start[0]+length<9){
        return [start, [start[0]+length,start[1]]];
    } else if(horizontal&&start[0]+length>=9){
        return [start, [start[0]-length,start[1]]];
    } else if(vertical&&start[1]+length<9){
        return [start, [start[0],start[1]+length]];
    } else if(vertical&&start[1]+length>=9){
        return [start, [start[0],start[1]-length]];
    } else {
        throw new Error('computer direction error')
    }
}
export {genCoordinates}
class Player {
    constructor(type){
        this.playerType =  type;
        this.Gameboard = new Gameboard();
    }
    setComputer(){
        let caPosition = genCoordinates(5);
        let bbPosition = genCoordinates(4);
        let crPosition = genCoordinates(3);
        let suPosition = genCoordinates(3);
        let ddPosition= genCoordinates(2);

        if(this.playerType = 'computer'){
            this.Gameboard.placeShip('ca', caPosition[0], caPosition[1]);
            this.Gameboard.placeShip('bb', bbPosition[0], bbPosition[1]);
            this.Gameboard.placeShip('cr', crPosition[0], crPosition[1]);
            this.Gameboard.placeShip('su', suPosition[0], suPosition[1]);
            this.Gameboard.placeShip('dd', ddPosition[0], ddPosition[1]);
        }
    }
}
export { Player }