
// si la condition est vraie:
// sum = array[n] + array [p]
// Il faut verifier si la condition est vraie en testant a chaque fois
// en stockant array [n] et en verifiant si a un moment 
// array [p] = sum - array[n] 
// nous pouvons le faire en compararant 
// la value de hash et sa cle


let sumCheck = (array, sum) => {
    let array_in_hash = {},
        counter = 0

    for (let i = 0; i < array.length; i++) {
        if (array_in_hash[array[i]]) {
            counter++
        } else {
            array_in_hash[sum - array[i]] = array[i];
        }
    }
    if (counter > 0) {
        return true
    } else return false
}
console.log(sumCheck([3, 1, 8, 7, 36, 52, 13], 24));

