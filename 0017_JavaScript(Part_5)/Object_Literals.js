// used to store keyed collection and complex entities


// generally objects are made constant
const person = {
    name: "Kishan",
    age: 19
};
const items = {
    price: 99.99,
    discount: 40,
    colors: ['green', 'magenta']
}

const post = {
    username : "@kishan",
    content: "First Post",
    likes: 100,
    repost: 50
};

console.log(person);

// Accessing object literals
console.log(post.username);
console.log(post["username"]);

let noOfPost = "repost";
console.log(post[noOfPost]);
console.log(post.noOfPost); // shows undefined as it is trying to find exactly noOfPost
