let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    console.log(country);
    let colData = await getUni(country);
    // console.log(colData);
    
    show(colData);
})

function show(colData){
    let ul = document.querySelector("ul");
    let list = document.querySelector("list");
    ul.innerHTML = "";
    for(col of colData) {
        console.log(col.name);
        let newLi = document.createElement("li");
        newLi.innerHTML = col.name;
        ul.appendChild(newLi);

    }
}


async function getUni(country) {
    try {
        let res = await axios.get(url + country);
        return (res.data);
    } catch (err) {
        console.log("Error : ", err);
        return [];
    }
}
