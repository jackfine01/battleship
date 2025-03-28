import { Gameboard } from "./gamboard";

class Player {
    constructor(){
        this.Gameboard = new Gameboard();
    }
    genStart(){
        let arr = [ Math.floor(Math.random()*10) , Math.floor(Math.random()*10) ]
        return arr;
    }

    genCoordinates(length){
            let start = this.genStart();
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

    genShips(){
        this.placeShipPlayer('ca');
        this.placeShipPlayer('bb');
        this.placeShipPlayer('cr');
        this.placeShipPlayer('su');
        this.placeShipPlayer('dd');        
    }
    placeShipPlayer(type){
        let finalPosition;
        let success = false;
        while(!success){
            try {
                let currentPosition = this.genCoordinates(4);
                finalPosition = currentPosition;
                this.checkValidPlacement(currentPosition[0],currentPosition[1])
                success = true
            } catch (error) {
                console.log(`trying to place ${type} again`)
            }
        }
        this.Gameboard.placeShip(type, finalPosition[0], finalPosition[1])
    }
    checkValidPlacement(start,end){
        let horizontal = null;
        let vertical = null;
        let positive = null;

        if(start[1]==end[1]){  // Conditional for finding vertical/horizontal direction (x/y)
            horizontal = true;
        } else if(start[0]==end[0]){
            vertical = true;
        } else {
            throw new Error('Unable to find x/y direction error')
        }

        if(horizontal === true){  //Conditional for finding direction from start node (+/-)
            if(start[0]>end[0]){
                positive = false;
            } else {
                positive = true;
            }
        }else if(vertical === true){
            if(start[1]>end[1]){
                positive = false;
            } else {
                positive = true;
            }
        } else {
           throw new Error('Unable to find +/- direction error')
        }

        if(horizontal){
            if(positive){
                for(let i = 0; i < this.Gameboard.board.length; i++){
                    let nodePlace = this.Gameboard.board[i];
                    if((nodePlace.position[0]>=start[0] && nodePlace.position[0]<=end[0])&&nodePlace.position[1]==start[1]){
                        if(nodePlace.containsShip === true){
                            throw new Error(`there is a ship at ${nodePlace.position} in the way: ${nodePlace.ship}`);
                        };
                    }
                }
            } else {
                for(let i = 0; i < this.Gameboard.board.length; i++){
                    let nodePlace = this.Gameboard.board[i];
                    if(nodePlace.position[0]<=start[0] && nodePlace.position[0]>=end[0]&&nodePlace.position[1]==start[1]){
                        if(nodePlace.containsShip === true){
                            throw new Error(`there is a ship at ${nodePlace.position} in the way: ${nodePlace.ship}`);
                        };
                    }
                }
            }
        } else if(vertical){
            if(positive){
                for(let i = 0; i < this.Gameboard.board.length; i++){
                    let nodePlace = this.Gameboard.board[i];
                    if((nodePlace.position[1]>=start[1] && nodePlace.position[1]<=end[1])&&nodePlace.position[0]==start[0]){
                        if(nodePlace.containsShip === true){
                            throw new Error(`there is a ship at ${nodePlace.position} in the way: ${nodePlace.ship}`);
                        };
                    }
                }
            } else {
                for(let i = 0; i < this.Gameboard.board.length; i++){
                    let nodePlace = this.Gameboard.board[i];
                    if((nodePlace.position[1]<=start[1] && nodePlace.position[1]>=end[1])&&nodePlace.position[0]==start[0]){
                        if(nodePlace.containsShip === true){
                            throw new Error(`there is a ship at ${nodePlace.position} in the way: ${nodePlace.ship}`);
                        };
                    }
                }
            }
        } else 
            throw new Error('Unable to loop')       
    }; 
}
export { Player }