let numbers = [3, 1, 8, 7, 36, 52, 13]

// on additionne le tableau des nombres restants a chaque tour avec le nombre du tour
// on verifie a chaque tour si la somme est egale a k par un filtre
// si le filtre existe on retourne true

const sumCheck = (k) => {

    for (let i = 0; i < numbers.length; i++) {
        let step = numbers[i];
        let numbers_left = numbers.slice(i + 1)
        if (numbers_left.map(x => x + step).filter(x => x == k).length) {
            return true
        }
    }
    return false
}


console.log(checkSum(24))