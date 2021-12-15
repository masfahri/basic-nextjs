import { useRouter } from 'next/router';
import React, { useEffect } from 'react'


export default function Custom404() {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 2000);
    })
    return (
        <div>
            <h1 className='title-not-found'>Oops...</h1>
            <h1 className='title-not-found'>Halaman Gaada Bos</h1>
        </div>
    )
}
