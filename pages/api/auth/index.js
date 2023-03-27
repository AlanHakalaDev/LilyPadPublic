import { listUsers } from "../../../prisma/users.js"
export default async function handler(req, res) {
    const body = req.body
  
    if (req.method === "POST") {
      try {
        const users = await listUsers()

          if ( users != [] ) {
            users.forEach(element => {
              if (element.email === body.email ) {
                if ( element.password === body.password ) {
                  return res.status(200).json(element.id)
                }
                else {
                  return res.status(401).json({data: "That password does not match the provided email."})
                }
              }
            });
          }
          return res.status(424).json({data: "There are no accounts found. Try again later, or create an account first."})
      }
      catch(error) {
        return res.status(500).json({data: 'Something went wrong on the server.'})
      }
    }
    else {
      return res.status(405).json({ data: 'METHOD NOT ALLOWED' })
    }
    
  }
