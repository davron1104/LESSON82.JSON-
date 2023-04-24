'use strict';

// JSON - Javascript Object Notation

// JSON.stringify() - преврашает объект в JSON формат

const person = {
    name: "Alex",
    tel: "+7878787"
};

console.log(JSON.stringify(person));

// JSON.parse() - преврашает JSON в объект формат
console.log(JSON.parse(JSON.stringify(person)));


const person = {
    name: "Alex",
    tel: "+7878787",
    "parents": {
        mom: "Olga",
        dad: "Mike"
    }
};

const clonePerson = JSON.parse(JSON.stringify(person));
clonePerson.parents.mom = "Julia";
console.log(person);
console.log(clonePerson);