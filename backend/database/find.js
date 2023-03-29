

const dbConnect = require('./db_service')
console.log(dbConnect);

const find = async () => {
    let db = await dbConnect();
    console.log("fetching data");
    let result = await db.collection("billing").find({}).toArray();
    return result;
}


module.exports = find;

