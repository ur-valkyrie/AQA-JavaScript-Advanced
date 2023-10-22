const userSettings = {
    username: "john_doe",
    theme: "dark",
    language: "en",
    notifications: true,
};

const objToJSON = JSON.stringify(userSettings);
console.log(objToJSON);

const JSONToObj = JSON.parse(objToJSON);
console.log(JSONToObj)