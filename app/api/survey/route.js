import { connectToDatabase } from '@/lib/mongodb'
import Survey from '@/models/Survey'

export async function POST(req) {
  try {
    const body = await req.json()
    await connectToDatabase()
    const survey = new Survey(body)
    await survey.save()

    return Response.json(
      { message: 'Survey submitted successfully!' },
      { status: 201 }
    )
  } catch (error) {
    return Response.json(
      { message: 'Failed to submit survey', error },
      { status: 500 }
    )
  }
}
