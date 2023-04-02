import ResponsiveImage from './responsive-image';
export default function UserBanner() {
  return (
    <>
      <section className="userbanner">
        <div className="userbanner-img-wrap position-relative">
          <ResponsiveImage
            className="w-100 h-100 object-fit-cover position-absolute"
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
        <div className="userbanner-text-wrap p-2">
          <h1 className="h4">Welcome user</h1>
          <h2 className="display-1">Welcome to iFlows</h2>
        </div>
      </section>
    </>
  );
}
