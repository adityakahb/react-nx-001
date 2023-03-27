import Head from 'next/head';
import StrippedLayout from '@/layouts/strippedLayout';
import Banner from '@/components/banner';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <StrippedLayout>
        <main>
          <Banner />
        </main>
      </StrippedLayout>
    </>
  );
}
