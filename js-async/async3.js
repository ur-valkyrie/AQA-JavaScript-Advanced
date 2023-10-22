async function getComments() {
    return fetch(`https://jsonplaceholder.typicode.com/comments/1`)
        .then(res => res.json());
}

async function getPosts() {
    return fetch(`https://jsonplaceholder.typicode.com/posts/2`)
        .then(res => res.json());
}

const result = Promise.all([getComments(), getPosts()]);
result.then((res) => console.log(res));
const fastestResult = Promise.race([getComments(), getPosts()]);
fastestResult.then((res) => console.log(res));

export {getComments, getPosts};


