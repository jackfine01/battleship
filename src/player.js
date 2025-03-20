import { Gameboard } from "./gamboard";
class Player {
    constructor(playerType){
        this.playerType =  playerType;
        this.Gameboard = new Gameboard();
    }
}