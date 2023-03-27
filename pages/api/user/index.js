import { addUser, listUsers } from "../../../prisma/users.js"

  export default async function handler(req, res) {
    const body = req.body
  
    if (req.method === "POST") {
      try {
        const users = await listUsers()

          if ( users != [] ) {
            users.forEach(element => {
              if ( element.email === body.email ) {
                return res.status(406).json({data: "Account with email already exists."})
              }
            });
          }
          const createdUser = await addUser(body)
          res.status(200).json(createdUser.id)
        
      }
      catch(error) {
        return res.status(406).json({data: `${error}`})
      }
    }
    else {
      return res.status(405).json({ data: 'METHOD NOT ALLOWED' })
    }
    
  }