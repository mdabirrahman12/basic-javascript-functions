function isElevatorSafe(weights) {
    if (Array .isArray (weights) == false){
        return 'Invalid';
    }
    let total = 0;
    for( let item of weights ){
        total += item
    }
    if (total <= 400) {
        return true
    } else{ 
        return false;

    }
}

const result = isElevatorSafe ([60, 75, 50]);
console.log(result)
const result2 = isElevatorSafe ([90, 100, 95, 120]);
console.log(result2)
const result3 = isElevatorSafe ([400]);
console.log(result3)
const result4 = isElevatorSafe ("60,75,50");
console.log(result4)



