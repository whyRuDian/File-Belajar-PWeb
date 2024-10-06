// callback, promise, fectch, then & catch, async await

// rollback

// console.log("Jalan")
// setTimeout(() => {
//     console.log("Sudah selesai")   
// }, 3000)

// console.log("Done bang")

// function ambilData() {
//     setTimeout(()=> {
//         console.log("Mulai ambil data dari db")
//         cancelIdleCallback("Data fetched")
//     }, 2000)
// }

// ambilData((result) => {
//     console.log(result)
//     console.log("Jalan")
// })

// PROMISE -> pending,  fulfilled, rejected
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data fetched")
        console.log("Promise status: fulfilled");
    }, 2000)
})

promise1.then(result=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})

//then and catch
// async await


//pelajari async lebih detail kalau mau belajar backendv                                                                                                                                                                                                                                                                                                                                                               