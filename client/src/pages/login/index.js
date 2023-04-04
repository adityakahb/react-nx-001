import Head from 'next/head';
import ResponsiveImage from '@/components/responsive-image';

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <main className="is-stripped position-relative min-vh-100">
        <ResponsiveImage
          className="w-100 h-100 object-fit-cover position-absolute"
          _default={{
            '1x': './images/banner/login-800x450.jpg',
            '2x': './images/banner/login-1600x900.jpg'
          }}
          _md={{
            '1x': './images/banner/login-1200x675.jpg',
            '2x': './images/banner/login-2400x1350.jpg'
          }}
          _xl={{
            '1x': './images/banner/login-1440x810.jpg',
            '2x': './images/banner/login-2880x1620.jpg'
          }}
          _xxl={{
            '1x': './images/banner/login-1920x1080.jpg',
            '2x': './images/banner/login-3840x2160.jpg'
          }}
          alt={'Image alt text'}
        />
        <div className="container position-absolute applogin-container h-100 w-100 justify-content-center align-items-center d-flex">
          <div className="row w-100">
            <div className="col justify-content-center align-items-center d-flex">
              <div className="applogin w-100 py-3">
                <div className="applogin-wrap">
                  <div className="applogin-header d-flex justify-content-center bg-white bg-opacity-75 rounded-top-3">
                    <div className="applogin-logo p-2">
                      <img
                        src="./images/logo-black.svg"
                        className="w-100"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="applogin-form bg-white rounded-bottom-3 p-3">
                    <form>
                      <div className="mb-3">
                        <label for="applogin_email" className="form-label">
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="applogin_email"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="applogin_password" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="applogin_password"
                        />
                      </div>
                      <div className="mb-3 form-check p-0">
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="applogin_remember"
                          />
                          <label
                            className="form-check-label"
                            for="applogin_remember"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="alert alert-danger d-flex" role="alert">
                          <span class="material-symbols-outlined me-2">
                            error
                          </span>{' '}
                          Invalid credentials
                        </div>
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Login
                        <span class="material-symbols-outlined">
                          chevron_right
                        </span>
                      </button>
                      <hr />
                      <div className="d-flex justify-content-around align-items-center">
                        Don{"'"}t have an account?
                        <a href="#" type="submit" className="btn btn-accent1">
                          Register now
                          <span class="material-symbols-outlined">
                            chevron_right
                          </span>
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
