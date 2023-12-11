import { GoLocation } from "react-icons/go";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { useLoaderData } from "react-router-dom";
import DetailsBanner from "../DetailsBanner/DetailsBanner";
import { useEffect, useState } from "react";
import { getStoredJobApplication } from "../../utility/localstorage";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedjobs] = useState([]);

  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      // const jobsApplied = jobs.filter((job) => storedJobIds.includes(job.id));
      const jobsApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedjobs(jobsApplied);
      console.log(jobs, storedJobIds, jobsApplied);
    }
  }, []);
  return (
    <div>
      <DetailsBanner details={"Applied Jobs"}></DetailsBanner>

      <div className="grid grid-cols-1 gap-6 my-12">
        {appliedJobs.map((jobs) => (
          <div jobs={jobs} key={jobs.id}>
            <div className="flex items-center bg-base-100  rounded-lg border border-[#E8E8E8]">
              <div className="w-[240px] h-[240px]  m-10 bg-[#F4F4F4] rounded-lg ">
                <div className="my-24  mx-12">
                  <img src={jobs.logo} alt="Shoes" className="w-100 " />
                </div>
              </div>
              <div className=" items-start text-start ">
                <h2 className="font-bold text-2xl">{jobs.job_title}</h2>
                <p className="text-[#757575] text-lg font-medium">
                  {jobs.company_name}
                </p>
                <div>
                  <button className="px-5 py-2 font-bold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">
                    {jobs.remote_or_onsite}
                  </button>
                  <button className="px-5 py-2 font-bold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">
                    {jobs.job_type}
                  </button>
                </div>
                <div className="flex my-4">
                  <h2 className="flex text-lg font-semibold">
                    <GoLocation className="text-2xl mr-2" />
                    {jobs.location}
                  </h2>
                  <h2 className="flex ml-4 text-lg font-semibold">
                    <HiOutlineCurrencyDollar className="text-2xl mr-2" />
                    {jobs.salary}
                  </h2>
                </div>
              </div>
              <div className="mx-auto">
                <button className=" text-white px-7 py-4 bg-[#7E90FE] font-bold rounded-lg">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
