import { getUser, deleteUser } from "../../../prisma/users.js"

export default async function handler(req, res) {
    const { id } = req.query
    if (req.method === "GET") {
        try {
            const user = await getUser(id)
            res.status(200).json(user)
          
        }
        catch(error) {
          return res.status(406).json({data: `${error}`})
        }
      }
      else {
        return res.status(405).json({ data: 'METHOD NOT ALLOWED' })
      }
  }