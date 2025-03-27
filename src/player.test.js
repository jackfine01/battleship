import { Player } from "./player";

let myInstance;
beforeEach(() => {
  myInstance = new Player('computer');
  myInstance.genShips();
});

test('player type is intially computer', ()=> {
    expect(myInstance.playerType).toEqual('computer');
})
test('there are only five ships', ()=> {
  expect(myInstance.Gameboard.ships.length).toEqual(5);
})

