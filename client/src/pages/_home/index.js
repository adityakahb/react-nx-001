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
          <section className="py-6">
            <div className="max-wrap">
              <div className="container text-center">
                <div class="row justify-content-center">
                  <div class="col align-self-center">
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <p class="lead">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse feugiat, tortor id posuere mattis, nisi risus
                      tempor diam, vitae rutrum sapien dolor posuere libero.
                    </p>
                    <p>
                      Nullam turpis eros, rutrum vitae tincidunt et, lobortis
                      sed metus. Ut ornare mi sit amet ante ultrices hendrerit.
                      Aliquam mattis nec nulla a pellentesque. Cras neque mi,
                      efficitur sed nulla et, convallis blandit nibh. Quisque
                      iaculis odio magna, nec consectetur nisl volutpat non.
                      Maecenas vel felis aliquet purus aliquam consectetur vitae
                      vel nisl. Integer suscipit non elit sit amet sollicitudin.
                      Etiam quis aliquam ipsum. Mauris aliquam sem eget quam
                      viverra, posuere efficitur elit mattis.
                    </p>
                    <p>
                      Suspendisse commodo nulla ligula, et accumsan ex luctus
                      vel. Nunc sit amet sem condimentum, lobortis diam ut,
                      commodo neque. Suspendisse rhoncus felis et elit imperdiet
                      blandit. Sed maximus, ipsum sit amet dignissim elementum,
                      sapien nisi gravida odio, eget congue neque nisl id
                      tellus. In hac habitasse platea dictumst. Phasellus
                      vehicula ipsum gravida consectetur rhoncus. Aliquam
                      facilisis erat quis leo tristique consectetur.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-10 bg-secondary">
            <div className="max-wrap">
              <div className="container text-center">
                <div class="row justify-content-center">
                  <div class="col align-self-center">
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <p class="lead">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse feugiat, tortor id posuere mattis, nisi risus
                      tempor diam, vitae rutrum sapien dolor posuere libero.
                    </p>
                    <p>
                      Nullam turpis eros, rutrum vitae tincidunt et, lobortis
                      sed metus. Ut ornare mi sit amet ante ultrices hendrerit.
                      Aliquam mattis nec nulla a pellentesque. Cras neque mi,
                      efficitur sed nulla et, convallis blandit nibh. Quisque
                      iaculis odio magna, nec consectetur nisl volutpat non.
                      Maecenas vel felis aliquet purus aliquam consectetur vitae
                      vel nisl. Integer suscipit non elit sit amet sollicitudin.
                      Etiam quis aliquam ipsum. Mauris aliquam sem eget quam
                      viverra, posuere efficitur elit mattis.
                    </p>
                    <p>
                      Suspendisse commodo nulla ligula, et accumsan ex luctus
                      vel. Nunc sit amet sem condimentum, lobortis diam ut,
                      commodo neque. Suspendisse rhoncus felis et elit imperdiet
                      blandit. Sed maximus, ipsum sit amet dignissim elementum,
                      sapien nisi gravida odio, eget congue neque nisl id
                      tellus. In hac habitasse platea dictumst. Phasellus
                      vehicula ipsum gravida consectetur rhoncus. Aliquam
                      facilisis erat quis leo tristique consectetur.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </StrippedLayout>
    </>
  );
}
