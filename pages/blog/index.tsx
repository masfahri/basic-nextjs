import Layout from "../../components/Layout";
import style from "./Blog.module.css";

interface Post {
    id: number;
    title: string;
    body: string;
}

interface BlogProps {
    dataBlog: Post[]
}

export default function Blog(props: BlogProps) {
    const {dataBlog} = props;
    return (
        <Layout pageTitle={"Blog Page"}>
            <h1 className="title-homepage">Blog Page</h1>
            {dataBlog.map((blog) => {
                return (
                    <div className={style.card} key={blog.id}>
                        <h3>{blog.title}</h3>
                        <p>{blog.body}</p>
                    </div>
                )
            })}
        </Layout>
    )
}

export async function getServerSideProps() {
    const apiURL = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const dataBlog = await apiURL.json();
    return {
        props: {
            dataBlog,
        }
    }
}
