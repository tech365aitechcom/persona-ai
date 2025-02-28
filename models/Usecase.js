import mongoose from 'mongoose'

const UseCaseSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    contact: { type: String, required: true },
    useCase: { type: String, required: true },
  },
  { timestamps: true }
)

export default mongoose.models.UseCase ||
  mongoose.model('UseCase', UseCaseSchema)
