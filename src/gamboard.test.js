import { Gameboard } from "./gamboard";


let myInstance;
beforeEach(() => {
  myInstance = new Gameboard();
  myInstance.placeShip('ca', [0,4],[0,0])
  myInstance.placeShip('bb', [3,5],[0,5])
  myInstance.placeShip('su', [2,3],[4,3])
  myInstance.placeShip('cr', [2,2],[4,2])
  myInstance.placeShip('dd', [5,4],[5,5])
  myInstance.hit([0,4]);
  myInstance.hit([0,3]);
  myInstance.hit([0,2]);
  myInstance.hit([0,1]);
  myInstance.hit([0,0]);

  myInstance.hit([3,5]);
  myInstance.hit([2,3]);
  myInstance.hit([4,2]);
  myInstance.hit([5,4]);
});
test('matrix is proper size', ()=> {
    expect(myInstance.board.length).toEqual(100);
})
test('all ships can be placed', ()=> {
  expect(myInstance.ships.length).toEqual(5);
})
test('nodes can be accessed', ()=>{ 
  expect(myInstance.board[0].position).toEqual([0,0])
})
test('nodes can be hit', ()=>{
  expect(myInstance.board[0].hasHit).toEqual(true)
})
test('Carriers can be hit', ()=> {
  expect(myInstance.hasHit([0,4])).toEqual(true);
})
test('Battleships can be hit', ()=> {
  expect(myInstance.hasHit([3,5])).toEqual(true);
})
test('Cruisers can be hit', ()=> {
  expect(myInstance.hasHit([2,3])).toEqual(true);
})
test('Submarines can be hit', ()=> {
  expect(myInstance.hasHit([4,2])).toEqual(true);
})
test('Destroyers can be hit', ()=> {
  expect(myInstance.hasHit([5,4])).toEqual(true);
})

test('Ships are all present', ()=> {
  expect(myInstance.ships.length).toEqual(5);
})

test('Carriers can be accessed', ()=> {
  expect(myInstance.board[myInstance.find([0,0])].ship).toEqual('ca');
})
test('Carriers can be sunk', ()=> {
  expect(myInstance.ships[0].sunk).toEqual(true);
})
