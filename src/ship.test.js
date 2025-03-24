import { Ship } from "./ship";

let myInstance;
beforeEach(() => {
  myInstance = new Ship('ca');
});

// test('',()=>{
//     expect().toEqual();
// })

test('carrier construction creates a carrier type', ()=> {
    expect(myInstance.type).toEqual('ca');
})

// test('battleship construction creates a battleship correctly',()=>{
//     expect().toEqual();
// })