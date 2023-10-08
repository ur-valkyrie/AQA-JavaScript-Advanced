// Task 1
let automationQA = {};
automationQA.programmerName = "Andrii";
automationQA.programmingLanguages = "JavaScript";
automationQA.age = 23;
automationQA.languages = ["ukrainian", "english", "german", "italian"];
automationQA.preferences = {
    basicPrefences: ["table", "chair"],
    devices: "laptop"
};
console.log(automationQA);

// Task 2
let room = {
    name: "bedroom",
    size: 32,
    window: true
};
console.log(room.name, room.window);

// Task 3
let movie = {
    title: "The Lord of the Rings",
    releaseYear: 2001,
    genre: "fantasy"
};

movie.title = "Dead Poets Society";
movie.genre = "drama";
movie.producers = ["Steven Haft", "Paul Junger Witt", "Tony Thomas"];
movie.country = "United States";
delete movie.title;
console.log(movie);