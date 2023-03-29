
// const insert = require('./insert')
const data = require('./find')

const getData = async () => {
    const list  = await data();
    console.log(list)
    
}
// insertProducts();
getData();

