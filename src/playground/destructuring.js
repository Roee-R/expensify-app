// Object destructuring

const person = {
  name: 'Andrew',
  age: 27,
  location: {
    city: 'Philadelphia',
    temp: 88
  }
};

const { name: firstName = 'Anonymous', age } = person;
console.log(`${firstName} is ${age}.`);

const { city, temp: temperature } = person.location;
if (city && temperature) {
  console.log(`It's ${temperature} in ${city}.`);
}

const book = {
    title: "Ego is the Enemy",
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = 'Self-Publisher'} = book.publisher;

console.log(publisherName);


// Array destructurin

const item = ['Coffee (hot)', '$2.00', '$2.50', '$3.00']

const [coffee, , MPrice, ] = item;
console.log(`A medium ${coffee} costs ${MPrice}`);