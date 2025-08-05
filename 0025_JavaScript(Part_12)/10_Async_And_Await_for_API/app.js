let url = "https://catfact.ninja/fact";

async function getFacts(){
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);
    }catch(err){
        console.log("ERROR - ",err);
    }
}

getFacts();
console.log("BYE");
