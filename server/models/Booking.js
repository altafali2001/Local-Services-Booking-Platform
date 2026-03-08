import mongoose from "mongoose"

const bookingSchema = new mongoose.Schema({

  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service"
  },

  date: String,

  address: String,

  status: {
    type: String,
    enum: ["requested","confirmed","in-progress","completed","cancelled"],
    default: "requested"
  }

})

export default mongoose.model("Booking", bookingSchema)