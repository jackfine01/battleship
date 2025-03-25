import { Ship } from "./ship";

let myInstance;
beforeEach(() => {
  myInstance = new Ship('ca');
  myInstance.hit();
  myInstance.hit();
  myInstance.hit();
  myInstance.hit();
  myInstance.hit();
});

// test('',()=>{
//     expect().toEqual();
// })

test('carrier construction creates a carrier type', ()=> {
    expect(myInstance.type).toEqual('ca');
})
test('carrier construction has a length of five', ()=> {
  expect(myInstance.length).toEqual(5);
})
test('carrier can get hit', ()=> {
  expect(myInstance.damage).toEqual(5);
})
test('carrier can get sunk', ()=> {
  expect(myInstance.sunk).toEqual(true);
})


// test('battleship construction creates a battleship correctly',()=>{
//     expect().toEqual();
// })