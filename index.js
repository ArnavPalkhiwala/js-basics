console.log('Learning Java Script!');

let firstName = 'Arnav';
let lastName = 'Palkhiwala'

console.log('My name is ' + firstName + ' ' + lastName);


let detailsOfPerson = {
    name: 'Arnav Palkhiwala',
    age: 15,
    favoriteColor: 'Blue',
    favoriteSport: 'Tennis'

}

console.log(detailsOfPerson)

let sports = ['Tennis', 'Soccer', 'Basketball', 'Football']
sports[4] = 24;
console.log(sports)
console.log(sports.length)

function speak(name){
    console.log('This is me speaking to ' + name);
}

speak('Arnav');
speak('Friend')

function addition(number1, number2){
    return number1 + number2
}
console.log(addition(1,2));