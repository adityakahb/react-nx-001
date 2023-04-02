import Head from 'next/head';
import DefaultLayout from '@/layouts/defaultLayout';
import Banner from '@/components/banner';
import ResponsiveImage from '@/components/responsive-image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Common</title>
      </Head>
      <DefaultLayout>
        <main></main>
      </DefaultLayout>
    </>
  );
}
