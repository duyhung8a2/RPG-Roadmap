import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '@/components/layout';

export default function FirstPost() {
    return (
        <Layout home>
            <Head>
                <title>First post</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            

            <div className='w-1/2 mx-auto mt-6 items-center justify-center  bg-white rounded-lg border-2 border-blue-200  shadow-lg cursor-pointer transition transform-all duration-200 hover:scale-105 hover:border-blue-400 '>
                <h1 className='text-3xl py-4 font-extrabold text-center'>First Post</h1>
            </div>

            <h2>
                <Link href="/">Back to Home</Link>;
            </h2>
        </Layout>
    );
}