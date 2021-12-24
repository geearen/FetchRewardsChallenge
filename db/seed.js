const { Transaction } = require("../models")

const seed = async () =>{
  try{
    const deletedTransaction = await Transaction.deleteMany();
    const createdTransaction = await Transaction.insertMany([
      {
        payer:'Allen',
        points: 1000,
      }
    ]);

    console.log(createdTransaction);
    console.log('==== Seed Complete ====');
  }catch(error){
    console.log(error);
  }
}

seed();