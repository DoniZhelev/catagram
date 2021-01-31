const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

const url = 'mongodb://localhost:27017';

const client = new MongoClient(url, {
    useUnifiedTopology: true
});
client.connect(function (err) {

    const db = client.db('catagram');
    const cats = db.collection('cats');
    cats.insertOne({
        name: 'Gosho'
    }, (err, result) => {
        cats.find({
            name: 'Navcho'
        }).toArray((err, data) => {
            console.log(data);
        });

    });
});

// firstWay
// client.connect(err =>{
//     if(err) {
//         console.log(err);
//         return;
//     }

//     const db  = client.db('catagram');
//     const cats = db.collection('cats');

//     cats.find({}, (err,result) =>{
//         if(err) {
//             console.log(err);
//             return;
//         }
//         result.toArray((err, result)=>{
//             console.log(result);
//         });
//     });

// });
// Second WAY
// client.connect()
// .then(res => {
//     const db  = client.db('catagram');
//     const cats = db.collection('cats');


//     return cats.findOne({});
// })
// .then(res =>{
//     console.log(res);
// })

// async function run() {
//     await client.connect();

//     const db =client.db('catagram');
//     const cats = db.collection('cats');

//     let firstCat =  await cats.findOne({});
//     console.log(firstCat);
// }