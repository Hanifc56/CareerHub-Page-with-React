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
      <h2 className="text-2xl">Applied job : {appliedJobs.length}</h2>
    </div>
  );
};

export default AppliedJobs;
