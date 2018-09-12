let favMovie = (movie = 'The Room', name = 'world') => console.log(`My name is ${name} and my favorite movie is ${movie}`);

favMovie('Shawshank Redemption');
favMovie();
favMovie('Shawshank Redemption', 'Josh');


let getName = (fullName) => {
    arrName = fullName.split(' ');

    console.log(arrName);
    firstName = arrName[0];
    lastName = arrName[1];
    return {
        firstName: firstName,
        lastName: lastName
    }
}

let nameObject = getName('Josh Womack')
console.log(nameObject);

let myArr = ['Josh', 'Birmingham', 'Tacos', 'Something else'];

let myFunction = (name, city, favFood) => console.log(`${name} ${city} ${favFood}`);

myFunction(...myArr);

myName = 'Josh';

myFunction = name => {
    [...name].forEach(letter => console.log(letter));
}

myFunction(myName);



