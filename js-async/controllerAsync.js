import {getComments, getPosts} from "./async3.js";

class ControllerAsync {
    async fetchComments() {
        return getComments();
    }

    async fetchPosts() {
        return getPosts();
    }
}

const controller = new ControllerAsync();
controller.fetchComments().then((comments) => console.log(comments));
controller.fetchPosts().then((posts) => console.log(posts));