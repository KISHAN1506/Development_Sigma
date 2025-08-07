let url = "https://icanhazdadjoke.com/"

async function getJokes(){
    try{
        let p = document.querySelector("p");
        // Data of API come in JSON Format if we pass in header value :
        const config = {headers : {Accept:"application/json"}};
        let res = await axios.get(url,config);
        // console.log(res.data.joke);
        p.innerText = res.data.joke;
    }catch(err) {
        console.log("Error : ",err);
    }
}

getJokes();