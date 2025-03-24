import { Gameboard } from "./gamboard";


let myInstance;
beforeEach(() => {
  myInstance = new Gameboard();
});
test('matrix is propper size', ()=> {
    expect(myInstance.board.length).toEqual(100);
})