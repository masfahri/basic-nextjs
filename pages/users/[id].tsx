import Router, { useRouter } from 'next/router'
import Layout from '../../components/Layout';

interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
}


interface UserDetailProps {
    user: User;
}

export default function UserDetail(props: UserDetailProps) {
    const router = useRouter();
    const {user} = props;
    return (
        <Layout pageTitle='User Detail'>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
        </Layout>
    )
}

export async function getStaticPaths() {
    const apiURL = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const dataUsers = await apiURL.json();

    const paths = dataUsers.map((user: User) => ({
        params: {
            id: `${user.id}`,
        },
    }));
    return {
        paths,
        fallback: false
    };
}

interface GetStaticProps {
    params: {
        id: string;
    }
}

export async function getStaticProps(context: GetStaticProps) {
    const {id} = context.params;
    const apiURL = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await apiURL.json();

    return {
        props: {
            user
        }
    }
    
}
