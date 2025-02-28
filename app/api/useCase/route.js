import { connectToDatabase } from '@/lib/mongodb'
import Usecase from '@/models/Usecase'

export async function POST(req) {
  try {
    const body = await req.json()
    await connectToDatabase()
    const useCase = new Usecase(body)
    await useCase.save()

    return Response.json(
      { message: 'Use Case submitted successfully!' },
      { status: 201 }
    )
  } catch (error) {
    return Response.json(
      { message: 'Failed to submit useCase', error },
      { status: 500 }
    )
  }
}
