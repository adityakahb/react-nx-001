import ResponsiveImage from './responsive-image';
export default function SiteHeader() {
  return (
    <>
      <section className="siteheader backdrop-blur bg-white bg-opacity-75">
        <header>
          <div className="container-fluid">
            <div className="row">
              <div className="col p-0 d-flex align-items-center flex-row-reverse justify-content-end">
                <div className="siteheader-logo d-flex">
                  <a href="#" className="d-block">
                    <img
                      src="./images/logo-black.svg"
                      className="w-100"
                      alt=""
                    />
                  </a>
                </div>
                <div className="siteheader-menu-toggle d-flex">
                  <button type="button" className="btn">
                    <span class="material-symbols-outlined">menu</span>
                  </button>
                </div>
              </div>
              <div className="col p-0 d-flex justify-content-end">
                <div className="siteheader-search-toggle d-flex">
                  <button type="button" className="btn">
                    <span className="material-symbols-outlined">search</span>
                  </button>
                </div>
                <div className="siteheader-notif-toggle d-flex">
                  <button type="button" className="btn position-relative">
                    <span className="material-symbols-outlined">
                      notifications
                      <em className="siteheader-notif bg-danger rounded-circle position-absolute color-white">
                        99+
                      </em>
                    </span>
                  </button>
                </div>
                <div className="siteheader-user d-flex ms-3">
                  <button
                    type="button"
                    className="btn d-flex justify-content-center align-items-center"
                  >
                    <div className="position-relative overflow-hidden rounded-circle">
                      <ResponsiveImage
                        className="w-100 h-100 object-fit-cover position-absolute top-50 start-50 translate-middle"
                        _default={{
                          '1x': 'https://i.pravatar.cc/100',
                          '2x': 'https://i.pravatar.cc/200'
                        }}
                        alt={'User Image'}
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
      </section>
    </>
  );
}
