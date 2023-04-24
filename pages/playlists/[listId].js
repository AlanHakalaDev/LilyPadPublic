import { useRouter } from 'next/router'

function test(){
    const router = useRouter()
    const playlistId = router.query.listId
    return <h1> you are here</h1>
}

export default test