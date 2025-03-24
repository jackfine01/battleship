import { Player } from "./player";

let myInstance;
beforeEach(() => {
  myInstance = new Player();
});

test('player tpye is intially null', ()=> {
    expect(myInstance.playerType).toEqual(null);
})