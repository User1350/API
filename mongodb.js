const {MongoClient}=require('mongodb');
const url="mongodb://localhost:27017"
const database="new";
const client=new MongoClient(url);

const dbConnect=async()=>
{
    const result=await client.connect();
    const db=result.db('new');
    return db.collection('me')
}

module.exports=dbConnect;