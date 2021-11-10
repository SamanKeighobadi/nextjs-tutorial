import User from "./User"
import Link from 'next/link'

function Users({users}) {
    return (
        <div>
            {users.map((user,index) => (
                <Link href={`/users/${user.id}`} key={index}>
                    {/* <User user={user} /> */}
                    <h2 className='username'>{user.name}</h2>
                </Link>
            ))}
        </div>
    )
}

export default Users

export const getStaticProps = async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()
    console.log(users)
    return {
        props:{
            users
        }
    }
}