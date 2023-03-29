import Head from 'next/head';
import StrippedLayout from '@/layouts/strippedLayout';
import Banner from '@/components/banner';
import ResponsiveImage from '@/components/responsive-image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <StrippedLayout>
        <main>
          <Banner />
          <section className="py-6 bg-white">
            <div className="max-wrap">
              <div className="container text-center">
                <div className="row justify-content-center">
                  <div className="col align-self-center">
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <p className="lead">
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
          <section className="py-10 bg-dark">
            <div className="max-wrap">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-2 col-xl-3">
                    <div className="card">
                      <ResponsiveImage
                        className="w-100 h-100 object-fit-cover"
                        _default={{
                          '1x': 'https://place-hold.it/300/xxxxxx/yyyyyy.png&fontsize=32',
                          '2x': 'https://place-hold.it/600/xxxxxx/yyyyyy.png&fontsize=32'
                        }}
                        _sm={{
                          '1x': 'https://place-hold.it/400/xxxxxx/yyyyyy.png&fontsize=32',
                          '2x': 'https://place-hold.it/800/xxxxxx/yyyyyy.png&fontsize=32'
                        }}
                        _md={{
                          '1x': 'https://place-hold.it/400/xxxxxx/yyyyyy.png&fontsize=32',
                          '2x': 'https://place-hold.it/800/xxxxxx/yyyyyy.png&fontsize=32'
                        }}
                        _lg={{
                          '1x': 'https://place-hold.it/400/xxxxxx/yyyyyy.png&fontsize=32',
                          '2x': 'https://place-hold.it/800/xxxxxx/yyyyyy.png&fontsize=32'
                        }}
                        _xl={{
                          '1x': 'https://place-hold.it/600/xxxxxx/yyyyyy.png&fontsize=32',
                          '2x': 'https://place-hold.it/1200/xxxxxx/yyyyyy.png&fontsize=32'
                        }}
                        _xxl={{
                          '1x': 'https://place-hold.it/600/xxxxxx/yyyyyy.png&fontsize=32',
                          '2x': 'https://place-hold.it/1200/xxxxxx/yyyyyy.png&fontsize=32'
                        }}
                        alt={'Image alt text'}
                      />
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card{"'"}s content.
                        </p>
                        <a href="#" className="btn btn-primary">
                          Go somewhere{' '}
                          <span class="material-symbols-outlined">
                            chevron_right
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-2 col-xl-3">
                    <div className="card">
                      <ResponsiveImage
                        className="w-100 h-100 object-fit-cover"
                        _default={{
                          '1x': 'https://place-hold.it/300/xxxxxx/yyyyyy.png&fontsize=32',
                          '2x': 'https://place-hold.it/600/xxxxxx/yyyyyy.png&fontsize=32'
                        }}
                        _sm={{
                          '1x': 'https://place-hold.it/400/xxxxxx/yyyyyy.png&fontsize=32',
                          '2x': 'https://place-hold.it/800/xxxxxx/yyyyyy.png&fontsize=32'
                        }}
                        _md={{
                          '1x': 'https://place-hold.it/400/xxxxxx/yyyyyy.png&fontsize=32',
                          '2x': 'https://place-hold.it/800/xxxxxx/yyyyyy.png&fontsize=32'
                        }}
                        _lg={{
                          '1x': 'https://place-hold.it/400/xxxxxx/yyyyyy.png&fontsize=32',
                          '2x': 'https://place-hold.it/800/xxxxxx/yyyyyy.png&fontsize=32'
                        }}
                        _xl={{
                          '1x': 'https://place-hold.it/600/xxxxxx/yyyyyy.png&fontsize=32',
                          '2x': 'https://place-hold.it/1200/xxxxxx/yyyyyy.png&fontsize=32'
                        }}
                        _xxl={{
                          '1x': 'https://place-hold.it/600/xxxxxx/yyyyyy.png&fontsize=32',
                          '2x': 'https://place-hold.it/1200/xxxxxx/yyyyyy.png&fontsize=32'
                        }}
                        alt={'Image alt text'}
                      />
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card{"'"}s content.
                        </p>
                        <a href="#" className="btn btn-primary">
                          Go somewhere{' '}
                          <span class="material-symbols-outlined">
                            chevron_right
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-2 col-xl-3">
                    <div className="card">
                      <ResponsiveImage
                        className="w-100 h-100 object-fit-cover"
                        _default={{
                          '1x': 'https://place-hold.it/300/xxxxxx/yyyyyy.png&fontsize=32',
                          '2x': 'https://place-hold.it/600/xxxxxx/yyyyyy.png&fontsize=32'
                        }}
                        _sm={{
                          '1x': 'https://place-hold.it/400/xxxxxx/yyyyyy.png&fontsize=32',
                          '2x': 'https://place-hold.it/800/xxxxxx/yyyyyy.png&fontsize=32'
                        }}
                        _md={{
                          '1x': 'https://place-hold.it/400/xxxxxx/yyyyyy.png&fontsize=32',
                          '2x': 'https://place-hold.it/800/xxxxxx/yyyyyy.png&fontsize=32'
                        }}
                        _lg={{
                          '1x': 'https://place-hold.it/400/xxxxxx/yyyyyy.png&fontsize=32',
                          '2x': 'https://place-hold.it/800/xxxxxx/yyyyyy.png&fontsize=32'
                        }}
                        _xl={{
                          '1x': 'https://place-hold.it/600/xxxxxx/yyyyyy.png&fontsize=32',
                          '2x': 'https://place-hold.it/1200/xxxxxx/yyyyyy.png&fontsize=32'
                        }}
                        _xxl={{
                          '1x': 'https://place-hold.it/600/xxxxxx/yyyyyy.png&fontsize=32',
                          '2x': 'https://place-hold.it/1200/xxxxxx/yyyyyy.png&fontsize=32'
                        }}
                        alt={'Image alt text'}
                      />
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card{"'"}s content.
                        </p>
                        <a href="#" className="btn btn-primary">
                          Go somewhere{' '}
                          <span class="material-symbols-outlined">
                            chevron_right
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-2 col-xl-3">
                    <div className="card">
                      <ResponsiveImage
                        className="w-100 h-100 object-fit-cover"
                        _default={{
                          '1x': 'https://place-hold.it/300/xxxxxx/yyyyyy.png&fontsize=32',
                          '2x': 'https://place-hold.it/600/xxxxxx/yyyyyy.png&fontsize=32'
                        }}
                        _sm={{
                          '1x': 'https://place-hold.it/400/xxxxxx/yyyyyy.png&fontsize=32',
                          '2x': 'https://place-hold.it/800/xxxxxx/yyyyyy.png&fontsize=32'
                        }}
                        _md={{
                          '1x': 'https://place-hold.it/400/xxxxxx/yyyyyy.png&fontsize=32',
                          '2x': 'https://place-hold.it/800/xxxxxx/yyyyyy.png&fontsize=32'
                        }}
                        _lg={{
                          '1x': 'https://place-hold.it/400/xxxxxx/yyyyyy.png&fontsize=32',
                          '2x': 'https://place-hold.it/800/xxxxxx/yyyyyy.png&fontsize=32'
                        }}
                        _xl={{
                          '1x': 'https://place-hold.it/600/xxxxxx/yyyyyy.png&fontsize=32',
                          '2x': 'https://place-hold.it/1200/xxxxxx/yyyyyy.png&fontsize=32'
                        }}
                        _xxl={{
                          '1x': 'https://place-hold.it/600/xxxxxx/yyyyyy.png&fontsize=32',
                          '2x': 'https://place-hold.it/1200/xxxxxx/yyyyyy.png&fontsize=32'
                        }}
                        alt={'Image alt text'}
                      />
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card{"'"}s content.
                        </p>
                        <a href="#" className="btn btn-primary">
                          Go somewhere{' '}
                          <span class="material-symbols-outlined">
                            chevron_right
                          </span>
                        </a>
                      </div>
                    </div>
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
