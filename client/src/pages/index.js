import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.scss';
import DefaultLayout from '@/layouts/defaultLayout';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Hello World</title>
      </Head>
      <DefaultLayout>
        <main></main>
      </DefaultLayout>
    </>
  );
}
