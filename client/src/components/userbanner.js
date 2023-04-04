import ResponsiveImage from './responsive-image';
export default function UserBanner() {
  return (
    <>
      <section className="userbanner">
        <div className="card rounded-3">
          <div className="userbanner-img-wrap position-relative overflow-hidden">
            <ResponsiveImage
              className="w-100 h-100 object-fit-cover position-absolute rounded-3 card-img-top"
              _default={{
                '1x': 'https://place-hold.it/960x240/xxxxxx/yyyyyy.png&fontsize=32',
                '2x': 'https://place-hold.it/1920x480/xxxxxx/yyyyyy.png&fontsize=32'
              }}
              _xl={{
                '1x': 'https://place-hold.it/1280x320/xxxxxx/yyyyyy.png&fontsize=32',
                '2x': 'https://place-hold.it/2560x640/xxxxxx/yyyyyy.png&fontsize=32'
              }}
              _xxl={{
                '1x': 'https://place-hold.it/1920x480/xxxxxx/yyyyyy.png&fontsize=32',
                '2x': 'https://place-hold.it/3840x960/xxxxxx/yyyyyy.png&fontsize=32'
              }}
              alt={'Image alt text'}
            />
          </div>
          <div className="card-body p-0 text-center position-relative">
            <ResponsiveImage
              className="img-fluid img-thumbnail object-fit-cover rounded-circle position-absolute"
              _default={{
                '1x': 'https://place-hold.it/100x100/xxxxxx/yyyyyy.png&fontsize=16',
                '2x': 'https://place-hold.it/200x200/xxxxxx/yyyyyy.png&fontsize=16'
              }}
              _xl={{
                '1x': 'https://place-hold.it/150x150/xxxxxx/yyyyyy.png&fontsize=24',
                '2x': 'https://place-hold.it/300x300/xxxxxx/yyyyyy.png&fontsize=24'
              }}
              alt={'Image alt text'}
            />
            <div className="userbanner-text-wrap">
              <h1 className="display-1">Abhishek Anand</h1>
              <button type="button" className="btn btn-primary">
                Hello
              </button>
            </div>
          </div>
        </div>
        {/* <div className="userbanner-img-wrap position-relative rounded-top-3 overflow-hidden">
          <ResponsiveImage
            className="w-100 h-100 object-fit-cover position-absolute rounded-3"
            _default={{
              '1x': 'https://place-hold.it/960x240/xxxxxx/yyyyyy.png&fontsize=32',
              '2x': 'https://place-hold.it/1920x480/xxxxxx/yyyyyy.png&fontsize=32'
            }}
            _xl={{
              '1x': 'https://place-hold.it/1280x320/xxxxxx/yyyyyy.png&fontsize=32',
              '2x': 'https://place-hold.it/2560x640/xxxxxx/yyyyyy.png&fontsize=32'
            }}
            _xxl={{
              '1x': 'https://place-hold.it/1920x480/xxxxxx/yyyyyy.png&fontsize=32',
              '2x': 'https://place-hold.it/3840x960/xxxxxx/yyyyyy.png&fontsize=32'
            }}
            alt={'Image alt text'}
          />
        </div>
        <div className="userbanner-text-wrap px-2 px-md-4 bg-white rounded-bottom-3">
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col text-center">
                <ResponsiveImage
                  className="img-fluid img-thumbnail object-fit-cover rounded-circle"
                  _default={{
                    '1x': 'https://place-hold.it/100x100/xxxxxx/yyyyyy.png&fontsize=16',
                    '2x': 'https://place-hold.it/200x200/xxxxxx/yyyyyy.png&fontsize=16'
                  }}
                  _xl={{
                    '1x': 'https://place-hold.it/150x150/xxxxxx/yyyyyy.png&fontsize=24',
                    '2x': 'https://place-hold.it/300x300/xxxxxx/yyyyyy.png&fontsize=24'
                  }}
                  alt={'Image alt text'}
                />
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
}
