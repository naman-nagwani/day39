prime = (number) => {
    for (let i = 2; i < number / 2; i++) {
        if (number % i == 0)      
            return false;
    }
    return true;
}

checkNumber = 212;
array = [];

for (let i = 2; i < checkNumber; i++) {
    if (checkNumber % i == 0) {
        if (prime(i) == true ){
            array.push(i);
        }
    }
}

console.log(array);