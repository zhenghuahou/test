const p = Promise.resolve(2);

(async () => {
  await p;
  console.log('after await') //2
})();
console.log(' p:', p);//1
p.then(() => console.log('tick a'))//3
  .then(() => console.log('tick b'))//4