const HeroSection = () => {
  return (
    <>
      <div className="w-fit xl:max-w-1/2 md:h-screen xl:flex xl:items-center">
        <div className="xl:-mt-20 w-full h-fit">
          <h1 className="text-3xl md:text-6xl font-semibold text-gray-100 font-poppins text-shadow xl:text-center">
            Haswanth Tamil
          </h1>
          <h2 className="text-lg md:text-2xl font-medium text-white/80 mt-2 font-poppins text-right text-shadow xl:text-center">
            Web & Android Developer
          </h2>
          <div>
            <p className="text-white text-shadow text-md md:text-xl font-lexend py-10 text-center leading-10">
              Turning pixels into magic.
              <br />
              Code is my wand.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
