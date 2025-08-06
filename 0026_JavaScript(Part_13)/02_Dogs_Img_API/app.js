let url = "https://dog.ceo/api/breeds/image/random";
let btn = document.querySelector("button");

async function getImage() {
    try {
        let res = await axios.get(url);
        return res.data.message;
    }catch(err){
        return "/";        
    }
}

btn.addEventListener("click",async ()=>{
    let img = document.querySelector("#result");

    // Await is important as the API is sending response and 
    // before getting the reponse only the image is replaced in src tag
    let link = await getImage();
    img.setAttribute("src",link)
});