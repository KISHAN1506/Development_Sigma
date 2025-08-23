const express = require("express");
const app = express();

// console.dir(app);


// port is a logical endpoint of a network 
// connection that is used to exchange information between 
// a web server and a web client
let port = 3000; //8080
app.listen(port, () => {
    console.log("App is Listening on port " + port);
})

// 1 single response can be given for 1 single path
// Different responses can be given for different path
// Eg -> 1 response given by app.use and 1 response given by app.get is not possible
app.get("/", (req, res) => {
    console.log("Request Received");
    res.send("Hello! I am root");
})
// app.get("/apple", (req, res) => {
//     console.log("Request Received");
//     res.send("You contacted the apple path");
// })
// app.get("/banana", (req, res) => {
//     console.log("Request Received");
//     res.send("You contacted the banana path");
// })
// app.post("/", (req, res) => {
//     console.log("Request Received");
//     res.send("You contacted the post request to root path");
// })
// // In new versions this is the method of middleware to define the function for the non existant paths
// app.use((req, res) => {
//     res.send("You contacted the wrong(non-existing) path");
// });


// In app.use on all the routes the response will be the same
// Taking request from user

// app.use((req, res) => {
// console.log(req);
// console.log("Request Received");
// res.send({
//     "frui  t": "Apple",
//     "color": "red"
// });
// res.send("<h1>Some normal Response</h1>")

// // let code = "<h1>Fruits</h1><ul><li>Apple</li><li>Banana</li></ul>";
// res.send(code);
// })

// Giving response
// Express converts the https requests (text based) into object requests (this process is called parsing)

// res.send function is used to send the response from our server

// Routing 
// It is a process of selecting a path for traffic in a network or between or across multiple network

// on apple path in server this is the response
// app.get("/apple", (req, res) => {
//     res.send({
//         name: "apple", color: "red",
//     });
// });

// / is the default paths 


// Path Parameters:
app.get("/:username/:id", (req, res) => {
    // console.log(req.params);
    // res.send("Hello! I am root");
    let {username,id} = req.params;
    let code = `<h1>Welcome to the page of @${username} having id ${id}</h1>`
    res.send(code);
});

app.get("/search",(req,res) => {
    let {q} = req.query;
    if(!q) {
        res.send("No query Exist!!");
    }
    res.send(`Search Results for query: ${q}`)
})
// http://localhost:3000/search?q=apple&color=green