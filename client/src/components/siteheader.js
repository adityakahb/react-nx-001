export default function SiteHeader({ children }) {
  return (
    <>
      <section className="siteheader fixed-top bg-white bg-opacity-75">
        <header>
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <div className="siteheader-logo d-flex">
                  <a href="#" className="d-block my-2">
                    <img
                      src="./images/logo-black.svg"
                      className="w-100"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="col"></div>
            </div>
          </div>
        </header>
      </section>
    </>
  );
}
