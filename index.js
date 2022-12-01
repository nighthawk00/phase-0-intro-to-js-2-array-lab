// Write your solution here!
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
    const copyOfCats = [...cats, name];

    return copyOfCats;
}

function prependCat(name) {
    const cpyOfCats = [name, ...cats];

    return cpyOfCats;
}

function removeLastCat() {
    const newCats = [...cats];

    newCats.pop();

    return newCats;
}

function removeFirstCat() {
    const nCats = [...cats];

    nCats.shift();

    return nCats;
}