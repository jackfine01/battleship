import { Player } from "./player";

const playerOne = new Player();
const playerTwo = new Player();
playerTwo.genShips();
const playerArray = [playerOne,playerTwo];

const playerBoard = document.getElementById('boardPlayer')
function createPlayerBoard(){
    for(let i=0;i<=100;i++){
        const cell = document.createElement('div')
        cell.className = 'cell';
        playerBoard.appendChild(cell);
    }
};
export {createPlayerBoard}
const cpuBoard = document.getElementById('boardComputer')
function createCPUBoard(){
    for(let i=0;i<=100;i++){
        const cell = document.createElement('div')
        const gameboardCell = playerTwo.Gameboard.board[i];
        cell.className = 'cpuCell';
        cpuBoard.appendChild(cell);
        cell.addEventListener('click', () => {
            if(gameboardCell.containsShip){
                cell.style.backgroundColor = 'red';
            } else
                cell.style.backgroundColor = 'lightgrey';
        })
    }
};
export {createCPUBoard}

