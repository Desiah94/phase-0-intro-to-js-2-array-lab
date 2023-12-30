const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
   cats.push(name);
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(name) {
   const newCatList = cats.concat([name]);
   return newCatList
}
function prependCat(name) {
    const newCatList = [(name), ...cats];
    return newCatList
}
function removeLastCat() {
    const newCatList = cats.slice();
    newCatList.pop();
    return newCatList;
}
function removeFirstCat() {
    const newCatList = cats.slice();
    newCatList.shift();
    return newCatList;
  }

