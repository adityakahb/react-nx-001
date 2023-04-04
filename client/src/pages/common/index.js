import Head from 'next/head';
import DefaultLayout from '@/layouts/defaultLayout';
import UserBanner from '@/components/userbanner';
import ImplementationCard from '@/components/implementation-card';

export default function Common() {
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
              <div className="row mb-4">
                <div className="col-12 col-md-6 col-xl-8">
                  <h1>Implementation List</h1>
                </div>
                <div className="col-12 col-md-6 col-xl-4 d-flex justify-content-md-end">
                  <form className="d-block w-100">
                    <div className="input-group">
                      <input
                        type="search"
                        className="form-control"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <button className="btn btn-primary" type="submit">
                        <span className="material-symbols-outlined">
                          search
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="container-fluid p-0">
                    <div className="row">
                      <div className="col-12 col-md-6 col-xl-4">
                        <ImplementationCard />
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <ImplementationCard />
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <ImplementationCard />
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <ImplementationCard />
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <ImplementationCard />
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <ImplementationCard />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <nav>
                    <ul className="pagination justify-content-center">
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">&laquo;</span>
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">&raquo;</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </main>
      </DefaultLayout>
    </>
  );
}
