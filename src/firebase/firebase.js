import * as firebase from 'firebase' // import all the methods from firebase to new verible "firebase"

    // Initialize Firebase
    const config = {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.FIREBASE_DATABASE_URL,
        projectId: process.env.FIREBASE_PROJECT_ID,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
    };

    firebase.initializeApp(config);

    const database = firebase.database();

    const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();

    export { firebase, GoogleAuthProvider, database as default };

    // //part TWO

    // // Child evevt hendler subscription (fired when some event happend)

    // // On child remove event from firebase
    // database.ref('expenses').on('child_removed', (snapshot)=>{
    //     console.log(snapshot.key, snapshot.val());
    // })

    // // On child change event from firebase
    // database.ref('expenses').on('child_changed', (snapshot)=>{
    //     console.log(snapshot.key, snapshot.val());
    // })

    // // On child added event from firebase
    // database.ref('expenses').on('child_added', (snapshot)=>{
    //     console.log(snapshot.key, snapshot.val());
    // })

    // const onExpenseChange = database.ref('expenses')
    // .on('value', (snapshot)=>{
    //     let expenses = [];
    //     snapshot.forEach((chiledData)=>{ // firebase function for each child in list
    //         expenses.push({
    //             id: chiledData.key, // the id key for each child
    //             ...chiledData.val() // spreading objects value for each child
    //         })
    //     })
    //     console.log(expenses);
    // })

    // database.ref('expenses').push({ // Generates a new child location using a unique key and returns its Reference.  
    //     description: 'Gaz Bill',
    //     note: "last one",
    //     amount: 123,
    //     createdAt: 3123123
    // }) // This is the most common pattern for adding data to a collection of items.



    // //part ONE

    // // ref => which part of the DB we trying to change
    // // if ref not mentioned it will be on the root
    // database.ref().set({ // Setting up data on the DB
    //     name: 'Roee Rudov',
    //     age: 29,
    //     isSingle: false,
    //     stressLevel: 6,
    //     job: {
    //         position: 'Softaware developer',
    //         company: 'CEVA'
    //     },
    //     location:{
    //         city: 'Tel-Aviv',
    //         address: 'Dizingof'
    //     }
    // }).then(()=>{
    //     console.log('success!')
    // }).catch((err)=>{
    //         console.log(`failed: ${err}`)
    // })

    // const onValueChange = database.ref().on('value', (snapshot)=>{  // Listens for data changes at a particular location. we can eve specify where to listen on the ref
    //     const val = snapshot.val();
    //     const name = val.name;
    //     const {position,company} = val.job;
    //     console.log(`${name} is a ${position} at ${company}`);
    // }) //return to onValueChange the function we send

    // // database.ref().off('value', onValueChange) // set ofo the onValueChange to listen each call 

    // database.ref().update({
    //     'job/company': 'Sunmsung'
    // })

    // database.ref('location/city').once('value').then((dataSnapshot)=>{ // fetching the location of the feting data
    //     const val = dataSnapshot.val();
    //     console.log(val);
    // }).catch((e)=>{
    //     console.log(`Failed fetching: ${e}`);
    // })

    // database.ref().update({ // update stressLevel verible and company nested verible special syntax (ugly)
    //     stressLevel: 9,
    //     'job/company': 'Check-Point',
    //     'location/city': "New-York",
    //     'location/address': "Manhattan"
    // })

    // database.ref('isSingle').remove().then(()=>{ // remove data
    //     console.log('remove isSingle');
    // }).catch((err)=>{
    //     console.log(`Faild remove: ${err}`)
    // })

    // database.ref('isSingle').set(null); //another method for remove

    // database.ref('age').set(33); // change the age to 33
    // database.ref('location/address').set('Alenbi'); // change the nested address to alenbi
    // database.ref('attribute').set({
    //     height: 190,
    //     weight: 67
    // })