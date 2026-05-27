import cake from './cake.json' with { type: 'json' };

console.log(cake);
const toppings = cake['topping']
let toppingLen = Object.keys(toppings).length 


function FizzBuzz() {
    for (let i = 0; i < toppingLen; i++) {
        if (i%2 == 0 && i%5 == 0) {
            toppings[i]['type'] = 'FizzBuzz';
            console.log(toppings[i]['type'])
        } else if (i%2 == 0) {
            toppings[i]['type'] = 'Fizz';
            console.log(toppings[i]['type'])
        } else {
            toppings[i]['type'] = 'Buzz';
            console.log(toppings[i]['type'])
        }
    }
    return toppings;
}

let newToppings = FizzBuzz()
