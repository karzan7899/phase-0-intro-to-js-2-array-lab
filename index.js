let cats = ['Milo', 'Otis', 'Garfield']
function destructivelyAppendCat(name) {
    return (cats.push("Ralph"))
}
function destructivelyPrependCat(name) {
    return (cats.unshift("Bob"))
}
function destructivelyRemoveLastCat(name) {
    return cats.pop();
}
function destructivelyRemoveFirstCat(name) {
    return cats.shift();
}
function appendCat(name) {
    const newName = [...cats, name];
    return newName

}
function prependCat(name) {
    const newName = [name, ...cats];
    return newName

}
function removeLastCat() {
    return (cats.slice(0, cats.length - 1))
}
function removeFirstCat() {
    return (cats.slice(1))
}