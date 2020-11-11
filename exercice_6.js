let counter = []
const buildingWestView = (array) => {
    let street = array.length
    for (let i = 0; i < street + 1 ; i++) {
        if (array[i] > array[i + 1]) {
            counter++        
        }
    }
    return `Il y a ${counter +1} immeuble(s) avec une vue à l'ouest`
}


console.log(buildingWestView([3, 7, 8, 3, 6, 1]))