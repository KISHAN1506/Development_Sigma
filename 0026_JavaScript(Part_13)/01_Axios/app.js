let btn = document.querySelector("button");
let url = "https://catfact.ninja/fact";

btn.addEventListener("click", async () => {
    let fact = await getFacts();
    console.log(fact);
        
    let p = document.querySelector("#result")
    p.innerHTML = fact;
})

async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (err) {
        console.log("Error : ", err);
        return "No FACT Found!";
    }
}

getFacts();