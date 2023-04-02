import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Hello World</title>
      </Head>
      <main>
        <Link href="/_home">Home</Link>
      </main>
    </>
  );
}
