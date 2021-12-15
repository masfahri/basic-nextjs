import Router, { useRouter } from 'next/router';
import Layout from '../../components/Layout'
import styles  from "./Users.module.css";

interface UserProps {
    dataUsers: Array<any>;
}

export default function Users(props: UserProps) {
    const {dataUsers} = props;
    const router = useRouter()

    console.log(dataUsers);
    
    return (
        <Layout pageTitle={"User Page"}>    
            {dataUsers.map(user => {
                return (
                    <div className={styles.card} onClick={() => router.push(`users/${user.id}`)} key={user.id}>
                        <h3>{user.name}</h3>
                        <p>{user.email}</p>
                    </div>
                )
            })}        
            {/* <p>User Index Page</p> */}
        </Layout>
    )
}


export async function getStaticProps() {
    const apiURL = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const dataUsers = await apiURL.json();
    return {
        props: {
            dataUsers,
        }
    }
}

