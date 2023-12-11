const HomeBanner = ({ ban }) => {
  const { banner_description, banner_img } = ban;
  return (
    <div className="flex my-12 items-center justify-center bg-white rounded-lg">
      <div className="pl-8">
        <h1 className="text-7xl font-bold pb-6">
          One Step
          <br />
          Closer To Your
          <br />
          <span className="text-[#9873FF] pt-4">Dream Job</span>
        </h1>
        <p className="font-medium text-[#757575] pb-8">{banner_description}</p>
        <button className="text-white px-7 py-5 bg-[#7E90FE] font-bold rounded-lg">
          Get Started
        </button>
      </div>
      <div>
        <img src={banner_img} alt="" />
      </div>
    </div>
  );
};

export default HomeBanner;
