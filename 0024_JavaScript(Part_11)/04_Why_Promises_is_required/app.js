function saveToDB(data, success, failure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
        success();
    } else {
        failure();
    }
}

saveToDB("Kishan Agarwal", () => {
    console.log("Your data1 was saved!");
    saveToDB("Hello", () => {
        console.log("Your data2 was saved!");
        saveToDB("World", () => {
            console.log("Your data3 was saved!");
        }, () => {
            console.log("Slow internet ! Your data3 was not saved!");
        })
    }, () => {
        console.log("Slow internet ! Your data2 was not saved!");
    })
}, () => {
    console.log("Slow internet ! Your data1 was not saved!");
});