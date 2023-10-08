// Task 4
const englishBooks = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960
    },
    {
        title: "abc",
        author: "George Orwell",
        year: 1949
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925
    }
];

englishBooks.forEach(writer => {
    if (writer.author === "George Orwell") {
        writer.author = "William Shakespeare";
    }

    if (writer.year > 1940 || writer.title !== "The Great Gatsby") {
        for (let key in writer) {
            console.log(key + ': ' + writer[key]);
        }
    }
});

console.log(englishBooks);


// Task 5
const typeOfDogs = {
    corgi: {
        name: "Alice",
        age: 10
    },
    mops: {
        name: "John",
        age: 2
    },
    staff: {
        name: "Nika",
        age: 5
    }
}

for (const key in typeOfDogs) {
    const obj = typeOfDogs[key];
    for (const value in obj) {
        console.log(`${key}.${value}: ${obj[value]}`);
    }
}


// Task 6
const user = {
    name: "Max",
    age: 25,
    email: "max@gmail.com",
    address: {
        country: "USA",
        city: "NY",
        street: "5th Ave"
    }
}

function getUserInfo (user) {
    let {name, age} = user;
    console.log(name, " ", age);
}

function getFullAddress(user) {
    let {email, address} = user;
    let {country, city, street} = address;
    console.log(email, " ", country, " ", city, " ", street);
}

getUserInfo(user);
getFullAddress(user);