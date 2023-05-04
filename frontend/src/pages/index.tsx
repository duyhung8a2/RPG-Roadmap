import Image from 'next/image'
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Head from 'next/head';
import Layout, { siteTitle } from '@/components/layout';
import utilStyles from '../styles/utils.module.css';
import  { getSortedPostsData, PostData } from '../lib/posts';

interface HomeProps {
	allPostsData: PostData[];
}

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}

export default function Home({ allPostsData }: HomeProps) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>Hello Motherfacker</p>
			</section>
			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				
			</section>
		</Layout>
	)
}
