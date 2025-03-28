import { Ship } from "./ship";
class boardNode {  // Information for each node on the board.
    constructor(position){
        this.hasHit = false;
        this.containsShip = false;
        this.position = position;
        this.ship = null;
    }
    hit(){ //assigns true to the node.
        this.hasHit = true;
    }
    shipPlace(){ //assigns true to contains ship
        this.containsShip = true;
    }
    setShip(type){  //sets ship type for the node.
        this.ship = type; 
    }
}                    
class Gameboard {  // Gameboard class object, contains ships, nodes, and implicit game end logic.
    constructor(){
        this.board = this.createBoard();
        this.hits = 0;
        this.misses = 0;
        this.ships = [];
        this.gameOver = false;
    }
    createBoard(){ // creates a 10x10 gameboard
        let nodeList = [];
        let matrix = [
            [0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0], 
            [0,1],[1,1],[2,1],[3,1],[4,1],[5,1],[6,1],[7,1],[8,1],[9,1],
            [0,2],[1,2],[2,2],[3,2],[4,2],[5,2],[6,2],[7,2],[8,2],[9,2],
            [0,3],[1,3],[2,3],[3,3],[4,3],[5,3],[6,3],[7,3],[8,3],[9,3], 
            [0,4],[1,4],[2,4],[3,4],[4,4],[5,4],[6,4],[7,4],[8,4],[9,4],
            [0,5],[1,5],[2,5],[3,5],[4,5],[5,5],[6,5],[7,5],[8,5],[9,5],
            [0,6],[1,6],[2,6],[3,6],[4,6],[5,6],[6,6],[7,6],[8,6],[9,6],
            [0,7],[1,7],[2,7],[3,7],[4,7],[5,7],[6,7],[7,7],[8,7],[9,7],
            [0,8],[1,8],[2,8],[3,8],[4,8],[5,8],[6,8],[7,8],[8,8],[9,8],
            [0,9],[1,9],[2,9],[3,9],[4,9],[5,9],[6,9],[7,9],[8,9],[9,9]
        ];
        while(matrix.length>0){
            let newNode = new boardNode(matrix.shift())
            nodeList.push(newNode)
        }
        return nodeList;
    };
    find(position){  //finds a position's index in the gameboard array
        let index = 0;
        for(let i = 0; i < 100 ;i++){
        let current = this.board[index].position;
            if(current[0]==position[0]&&current[1]==position[1]){
                return index;
            }
        index++;
        };
    }; 
    hit(position){ // hits a position on the gameboard.
        let index = 0;
        for(let i = 0; i < 100 ;i++){
            let current = this.board[index].position;
            let currentShip = this.board[index].ship
                if(current[0]==position[0]&&current[1]==position[1]){
                    if(this.board[index].hasHit == false){
                        this.board[index].hit();
                        if(this.board[index].containsShip){
                            this.hits++;
                            for(let j = 0; j < 4; j++){
                                if(this.ships[j].type==currentShip){
                                    this.ships[j].hit();
                                }
                            }
                        }
                        if(!this.board[index].containsShip)
                            this.misses++;
                    }
                }
            index++;
        };
        if(this.hits >= 17){
            this.gameOver = true;
        }
    };
    hasHit(position){  // checks to see if a position has been hit before.
        let index = 0;
        for(let i = 0; i < 100 ;i++){
            let current = this.board[index].position;
                if(current[0]==position[0]&&current[1]==position[1]){
                    return this.board[index].hasHit;
                }
            index++;
        };
    }
    placeShip(type, start, end){  // creates a ship and places it on the board given ship type, starting, and ending coordiantes.
        let horizontal = null;
        let vertical = null;
        let positive = null;
        const ship = new Ship(type)
        this.ships.push(ship);

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
                for(let i = 0; i < this.board.length; i++){
                    let nodePlace = this.board[i];
                    if((nodePlace.position[0]>=start[0] && nodePlace.position[0]<=end[0])&&nodePlace.position[1]==start[1]){
                        if(nodePlace.containsShip === true){
                            throw new Error(`there is a ship at ${nodePlace.position} in the way: ${nodePlace.ship}`);
                        };
                        this.board[i].shipPlace();
                        this.board[i].setShip(type);
                    }
                }
            } else {
                for(let i = 0; i < this.board.length; i++){
                    let nodePlace = this.board[i];
                    if(nodePlace.position[0]<=start[0] && nodePlace.position[0]>=end[0]&&nodePlace.position[1]==start[1]){
                        if(nodePlace.containsShip === true){
                            throw new Error(`there is a ship at ${nodePlace.position} in the way: ${nodePlace.ship}`);
                        };
                        this.board[i].shipPlace();
                        this.board[i].setShip(type);
                    }
                }
            }
        } else if(vertical){
            if(positive){
                for(let i = 0; i < this.board.length; i++){
                    let nodePlace = this.board[i];
                    if((nodePlace.position[1]>=start[1] && nodePlace.position[1]<=end[1])&&nodePlace.position[0]==start[0]){
                        if(nodePlace.containsShip === true){
                            throw new Error(`there is a ship at ${nodePlace.position} in the way: ${nodePlace.ship}`);
                        };
                        this.board[i].shipPlace();
                        this.board[i].setShip(type);
                    }
                }
            } else {
                for(let i = 0; i < this.board.length; i++){
                    let nodePlace = this.board[i];
                    if((nodePlace.position[1]<=start[1] && nodePlace.position[1]>=end[1])&&nodePlace.position[0]==start[0]){
                        if(nodePlace.containsShip === true){
                            throw new Error(`there is a ship at ${nodePlace.position} in the way: ${nodePlace.ship}`);
                        };
                        this.board[i].shipPlace();
                        this.board[i].setShip(type);
                    }
                }
            }
        } else 
            throw new Error('Unable to loop')       
    };
};
export { Gameboard }