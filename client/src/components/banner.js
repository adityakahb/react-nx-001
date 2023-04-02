import ResponsiveImage from "./responsive-image";
export default function Banner() {
  return (
    <>
      <section className="site-banner position-relative min-vh-100">
        <ResponsiveImage
          className="w-100 h-100 object-fit-cover position-absolute"
          _default={{
            '1x': 'https://place-hold.it/800x450/xxxxxx/yyyyyy.png&fontsize=32',
            '2x': 'https://place-hold.it/1600x900/xxxxxx/yyyyyy.png&fontsize=32'
          }}
          _md={{
            '1x': 'https://place-hold.it/1200x675/xxxxxx/yyyyyy.png&fontsize=32',
            '2x': 'https://place-hold.it/2400x1350/xxxxxx/yyyyyy.png&fontsize=32'
          }}
          _xl={{
            '1x': 'https://place-hold.it/1440x810/xxxxxx/yyyyyy.png&fontsize=32',
            '2x': 'https://place-hold.it/2880x1620/xxxxxx/yyyyyy.png&fontsize=32'
          }}
          _xxl={{
            '1x': 'https://place-hold.it/1920x1080/xxxxxx/yyyyyy.png&fontsize=32',
            '2x': 'https://place-hold.it/3840x2160/xxxxxx/yyyyyy.png&fontsize=32'
          }}
          alt={'Image alt text'}
        />
        {/* <video
          loop
          autoPlay
          className="w-100 h-100 object-fit-cover position-absolute"
          muted
          controls={false}
        >
          <source src="./videos/banner.mp4" type="video/mp4" />
        </video> */}
        <div className="site-banner-masek bg-primary bg-opacity-75 w-100 h-100 position-absolute"></div>
      </section>
    </>
  );
}
