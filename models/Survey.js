import mongoose from 'mongoose'

const SurveySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: String, required: true },
    gender: { type: String, required: true },
    country: { type: String, required: true },
    cryptoExperience: { type: String, required: true },
    cryptoAssets: { type: [String], required: true },
    aiTokens: { type: String, required: true },
    investmentPhilosophy: { type: String, required: true },
    isQualified: { type: Boolean, default: false },
  },
  { timestamps: true }
)

export default mongoose.models.Survey || mongoose.model('Survey', SurveySchema)
