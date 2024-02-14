import { db } from '@/db'

export async function GET(request: Request) {
  if (request.method === 'GET') {
    const trips = await db.trips.findMany();
    return Response.json(trips);
  }
}
