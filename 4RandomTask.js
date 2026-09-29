function randomTask()
{
    return new Promise((resolve, reject) => {
        const random = Math.random();

        if (random < 0.5) {
            resolve("Sukces")
        }else{
            reject("Niepowodzenie");
        }
    });
}
randomTask().then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});