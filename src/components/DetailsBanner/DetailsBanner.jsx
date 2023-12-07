const DetailsBanner = ({ details }) => {
  return (
    <div className="max-w-full items-start text-center mb-12 ">
      <h1 className="text-3xl font-extrabold text-[#1A1919] py-12">
        {details}
      </h1>
    </div>
  );
};

export default DetailsBanner;
