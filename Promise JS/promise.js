console.log('Request data...');

// setTimeout(() => {
//     console.log('Preparing data...');

//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     }

//     setTimeout(() => {
//         backendData.modified = true;
//         console.log('Data reseived' , backendData);
//     }, 2000)
// }, 2000)



// let prom = new Promise( function(resolve, reject) {
//     setTimeout(() => {
//         console.log('Preparing data...');
//         const backendData = {
//             server: 'aws',
//             port: 2000,
//             status: 'working'
//         }
//         resolve(backendData);
//     }, 2000)
// })

// prom.then(data => {
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             data.modified = true;
//             resolve(data)
//         }, 2000)
//     })
// }).then(clientData => {
//     clientData.fromPromise = true
//     console.log('Promise resolved' , clientData)
// })
// .catch(err => console.error('Error', err))
// .finally(() => console.log('Finnaly'))


const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve() , ms)
    })
}

// sleep(2000).then(() => console.log('After 2 sec'))
// sleep(4000).then(() => console.log('After 4 sec'))

Promise.all([sleep(2000), sleep(3000)]).then(() => {
    console.log('All promises')
})

Promise.race([sleep(2000), sleep(3000)]).then(() => {
    console.log('Race promises')
})