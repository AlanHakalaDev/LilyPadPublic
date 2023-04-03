import { addUser, listUsers } from "../../../prisma/users.js"

  export default async function handler(req, res) {
    const body = req.body
  
    if (req.method === "POST") {
      try {
        const users = await listUsers()

          if ( users != [] ) {
            users.forEach(element => {
              if ( element.email === body.email ) {
                return res.status(406).json("Account with email already exists.")
              }
            });
          }
          const createdUser = await addUser(body)
          return res.status(200).json(createdUser.id)
        
      }
      catch(error) {
        return res.status(406).json(`${error}`)
      }
    }
    else {
      return res.status(405).json('METHOD NOT ALLOWED')
    }
    
  }
