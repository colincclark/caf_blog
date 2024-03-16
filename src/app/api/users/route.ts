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

// const users = await db.users.findMany();

//         // Bcrypt passwords and update in the database
//         await Promise.all(users.map(async (user: any) => {
//           const hashedPassword = await bcrypt.hash(user.password_hash, 10); // Hash the password with a salt round of 10
//           await db.users.update({
//             where: { id: user.id }, // Adjust as per your schema
//             data: { password_hash: hashedPassword },
//           });
//         }));
