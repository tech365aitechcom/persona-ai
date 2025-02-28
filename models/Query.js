import mongoose from 'mongoose'

const QuerySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    areOfQuery: { type: String, required: true },
  },
  { timestamps: true }
)

export default mongoose.models.Query || mongoose.model('Query', QuerySchema)
