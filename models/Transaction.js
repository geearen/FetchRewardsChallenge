const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    payer:{
      type: String,
      require: [true, "payer can not be empty"]
    },
    points:{
      type: Number,
      require: [true, "points can not be empty"]
    }
  },
  {
    timestamps: true,
  }
);

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;