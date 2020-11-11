let numbers = [3, 1, 8, 7, 36, 52, 13]
let counterConditionTrue = 0

const sumCheck = (k) => {

    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length && j !== i; j++) {

            if (numbers[i] + numbers[j] === k) {
                counterConditionTrue++
            }
        }
    }
    if (counterConditionTrue > 0) {
        return true
    } else {
        return false
    }
}


console.log(sumCheck(9))