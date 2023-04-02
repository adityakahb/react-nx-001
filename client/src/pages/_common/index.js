import Head from 'next/head';
import DefaultLayout from '@/layouts/defaultLayout';
import UserBanner from '@/components/userbanner';

export default function Home() {
  return (
    <>
      <Head>
        <title>Common</title>
      </Head>
      <DefaultLayout>
        <main>
          <div className="max-wrap">
            <div className="container-fluid">
              <div className="row">
                <div className="col">
                  <UserBanner />
                </div>
              </div>
            </div>
          </div>
        </main>
      </DefaultLayout>
    </>
  );
}
