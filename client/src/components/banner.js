export default function Banner() {
  return (
    <>
      <section className="site-banner">
        <video loop autoPlay className="w-100" muted controls={false}>
          <source src="./videos/banner.mp4" type="video/mp4" />
        </video>
      </section>
    </>
  );
}
