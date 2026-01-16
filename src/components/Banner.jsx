import bannerImg from "../assets/banner-img-1.png";

const Banner = () => {
  return (
    <div className="hero bg-base-100 py-12 px-4 md:px-12">
      <div className="hero-content flex-col lg:flex-row-reverse gap-8">
        {/* Image Section */}
        <div className="flex-1">
          <img
            src={bannerImg}
            className="max-w-sm md:max-w-lg rounded-lg shadow-2xl"
            alt="Doctor"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 space-y-5">
          <h1 className="text-5xl font-bold leading-tight">
            Your New Smile <br />
            <span className="text-blue-600">Starts Here</span>
          </h1>
          <p className="py-6 text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </p>
          <button className="btn btn-primary bg-gradient-to-r from-blue-500 to-blue-700 text-white border-none px-6">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
