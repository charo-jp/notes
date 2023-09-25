// Initial commit
// function* はジェネレーターオブジェクトを返す。反復可能プロトコルの支援

var fibGenerator = function* () {
  let x = 0;
  yield x; // it stops executing for the first time this function is called. 
  x = 1;
  y = 1;
  yield x;
  yield x;
  while (true) {
    const temp = x;
    x = x + y;
    y = temp;
    yield x;
  }
};

const gen = fibGenerator();
for (let i = 0; i < 50; i++) {
  console.log(gen.next().value);
}
// 0 1 1 2 3 5 8 .....
