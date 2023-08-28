const Post = require("./Post");

class autor {
    constructor(name){
        this.name = name;
        this.post = []
    }
    addPost(texto){
        const newPost = new Post(texto)
        this.post.push(newPost)
        return newPost
    }
}

module.exports = autor