import Head from 'next/head';
import ResponsiveImage from '@/components/responsive-image';

export default function Login() {
  return (
    <>
      <Head>
        <title>Register</title>
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
                    <a
                      className="btn btn-outline-accent1 w-100"
                      href="/users/googleauth"
                      role="button"
                    >
                      <img
                        alt="Google sign-in"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                      />
                      Login with Google
                    </a>
                    <hr />
                    <form>
                      <div className="mb-3">
                        <label
                          for="appregister_firstname"
                          className="form-label"
                        >
                          First name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="appregister_firstname"
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          for="appregister_lastname"
                          className="form-label"
                        >
                          Last name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="appregister_lastname"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="appregister_email" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="appregister_email"
                        />
                      </div>
                      <div class="mb-3">
                        <label
                          for="appregister_password"
                          className="form-label"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="appregister_password"
                        />
                      </div>
                      <div className="mb-3">
                        <div className="alert alert-danger d-flex" role="alert">
                          <span class="material-symbols-outlined me-2">
                            error
                          </span>{' '}
                          Invalid email
                        </div>
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Register
                        <span class="material-symbols-outlined">
                          chevron_right
                        </span>
                      </button>
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
