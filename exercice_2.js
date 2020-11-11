  
let first_counter = 0

const buildingWestView = (array) => {
    let street = array.length
    for (let i = 0; i < street; i++) {
        for (let j = i; i < street; i++) {
            let second_counter = 0
            if (array[j] < array[i]) {
                second_counter++
            }
            if (second_counter > 0) {
                first_counter++
            }
        }
    }
    return `On a ${(array.length - first_counter)} immeuble(s) ayant une vue à l'Ouest`
}

console.log(buildingWestView([3, 7, 8, 3, 6, 1]))