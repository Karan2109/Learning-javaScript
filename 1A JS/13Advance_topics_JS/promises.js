// Promise with variable & Seperate then, (then & resolve both are one & same)
const promiseOne = new Promise(function(resolve, reject) {
    //Do an async tasks
    //DB calls, cryptography, network
    setTimeout(function() {
        console.log("Async task 1 is completed");
        resolve();    
    }, 1000)
});

promiseOne.then(function() {
    console.log("PromiseOne Consumed");
});


// promise without variable and attached then at bottom (then & resolve both are one & same)
new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Async task 2 is completed');
        resolve();
    }, 1000);
}).then(() => {
    console.log('Async 2 Resolved');
});


// promise using resolve data from the data base
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve({userName: "Karan Singh", email: "karan@gmail.com"})
    },1000);
});

promiseThree.then((user) => {
    console.log('PromiseThree Resolved', user);
});


const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false; //if true catch will run
        
        if(!error) {
            resolve({username: "Karan", password: "1234"})
            // resolve('Promise Resolved successfully');
        } else {        
            reject('ERROR: Failed');
        }
    }, 1000);
});

promiseFour
   .then((user) => {
        console.log('Promise Four Resolved', user);// Promise Four Resolved {username: 'Karan', password: '1234'}
        return user.username;
    })
    .then((username) => {
        console.log('Promise Four Resolved Username', username); //Promise Four Resolved Username Karan
    })
    .catch((error) => {
        console.log('Promise Four Rejected', error);
    }).finally((done) => {
        console.log('Promise Four Finally Resolved or Rejected'); // Promise Four Finished
    });


// using Promise with async await
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        
        if(!error) {
            resolve({username: "JavaScript", password: "1234"})
        }else {
            reject('ERROR: JS Failed');
        }
    },1000)
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()


// using Async with try cathch block & fetch method

async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json(); //converting string to json
        console.log(data);
    } catch (error) {
        console.log('Error fetching users:', error);
    }
};

getAllUsers();


fetch('https://api.github.com/users/hiteshchoudhary')
.then( (response) => {
    return response.json
    // console.log('Fetch API Request completed successfully!');
})
.then( (data) => {
    console.log("data")
})
.catch( (error) => {
    console.log('Fetch API request failed!', error);
})

