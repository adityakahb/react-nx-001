export default function Banner() {
  return (
    <>
      <section className="site-banner position-relative min-vh-100">
        <video
          loop
          autoPlay
          className="w-100 h-100 object-fit-cover position-absolute"
          muted
          controls={false}
        >
          <source src="./videos/banner.mp4" type="video/mp4" />
        </video>
      </section>
    </>
  );
}
