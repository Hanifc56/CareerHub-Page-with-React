import { useEffect, useState } from "react";

const CatagoryList = () => {
  const [catagory, setCatagory] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCatagory(data));
  }, []);
  return (
    <div className="text-center">
      <h2 className="text-5xl font-bold text-[#1A1919]  pt-32">
        Job Category List
      </h2>
      <p className="font-medium text-[#757575] pt-4 pb-8">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-4 gap-4 py-12">
        {catagory.map((job) => (
          <div job={job} key={job.id}>
            <div className=" rounded-lg w-auto bg-base-100 shadow-xl">
              <div className="pl-6 pt-6">
                <div className=" w-20 h-20 bg-[#d8ccf9] p-5 rounded-lg">
                  <img src={job.logo} alt="" className="w-100" />
                </div>
              </div>
              <div className="card-body items-start text-start">
                <h2 className="text-xl font-bold text-[#474747]">
                  {job.category_name}
                </h2>
                <p className="font-normal text-[#A3A3A3]">{job.availability}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatagoryList;
