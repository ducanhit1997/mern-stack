const mongoose = require("mongoose")

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI)
    if (conn.connection.readyState === 1) console.log('DB connect succesfully!')
  } catch (error) {
    console.log('DB connect fail!')
  }
}

module.exports = dbConnect