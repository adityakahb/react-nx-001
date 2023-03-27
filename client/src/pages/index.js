import Head from 'next/head';
import Link from 'next/link';
import StrippedLayout from '@/layouts/strippedLayout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Hello World</title>
      </Head>
      <StrippedLayout>
        <main>
          <Link href="/_home">Home</Link>
        </main>
      </StrippedLayout>
    </>
  );
}
