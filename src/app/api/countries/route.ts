import { db } from '@/db'

export async function GET(request: Request) {
  if (request.method === 'GET') {
    const countries = await db.countries.findMany();
    return Response.json(countries);
  }
}
