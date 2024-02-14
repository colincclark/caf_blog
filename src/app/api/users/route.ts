import { db } from '@/db'

export async function GET(request: Request) {
  if (request.method === 'GET') {
    const users = await db.users.findMany({
      where: {
        role_id: {
          equals: 1
        }
      }
    });
    return Response.json(users);
  }
}
