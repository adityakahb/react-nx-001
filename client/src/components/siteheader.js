import { NavigationData } from './../contexts/nav-context';
import { useContext } from 'react';
import ResponsiveImage from './responsive-image';

export default function Siteheader() {
  const { isOpen, setIsOpen } = useContext(NavigationData);

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <section className="siteheader bg-accent4 backdrop-blur bg-opacity-75 fixed-top">
        <header>
          <div className="container-fluid">
            <div className="row g-0">
              <div className="col d-flex align-items-center flex-row-reverse justify-content-end">
                <div className="siteheader-logo d-flex">
                  <a href="#" className="d-block">
                    <img
                      src="./images/logo-black.svg"
                      className="w-100"
                      alt=""
                    />
                  </a>
                </div>
                <div className="siteheader-menu-toggle d-flex d-xxl-none">
                  <button
                    type="button"
                    className={
                      (isOpen === true ? 'sitenav-opened ' : '') + 'btn'
                    }
                    onClick={() => {
                      toggleNavigation();
                    }}
                  >
                    <span className="material-symbols-outlined is-nav-closed">
                      menu
                    </span>
                    <span className="material-symbols-outlined is-nav-opened">
                      close
                    </span>
                  </button>
                </div>
              </div>
              <div className="col d-flex justify-content-end">
                <div className="siteheader-search-toggle d-flex">
                  <button type="button" className="btn">
                    <span className="material-symbols-outlined">search</span>
                  </button>
                </div>
                <div className="siteheader-notif-toggle d-flex">
                  <button type="button" className="btn position-relative">
                    <span className="material-symbols-outlined">
                      notifications
                    </span>
                    <span className="position-absolute top-0 start-50 translate-middle p-1 bg-danger border border-light rounded-circle">
                      <span className="visually-hidden">New alerts</span>
                    </span>
                  </button>
                </div>
                <div className="siteheader-user d-flex">
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
