import mongoose from "mongoose"

const serviceSchema = new mongoose.Schema({

  name: String,

  category: String,

  price: Number,

  description: String,

  provider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }

})

export default mongoose.model("Service", serviceSchema)


