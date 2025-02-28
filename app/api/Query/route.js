import { connectToDatabase } from '@/lib/mongodb'
import Query from '@/models/Query'

export async function POST(req) {
  try {
    const body = await req.json()
    await connectToDatabase()
    const query = new Query(body)
    await query.save()

    return Response.json(
      { message: 'Query submitted successfully!' },
      { status: 201 }
    )
  } catch (error) {
    return Response.json(
      { message: 'Failed to submit query', error },
      { status: 500 }
    )
  }
}
