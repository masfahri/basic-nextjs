import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <Layout pageTitle={'Home page'}>
            <Image src="/images/profile.png" width={200} height={200} />
            <h1 className={styles['title-homepage']}>Welcome Masfahri</h1>
        </Layout>
    );
}