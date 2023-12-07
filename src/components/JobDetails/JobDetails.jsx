import { useLoaderData, useParams } from "react-router-dom";
import DetailsBanner from "../DetailsBanner/DetailsBanner";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  console.log(job, id);
  return (
    <div>
      <DetailsBanner details={"Job Details"}></DetailsBanner>
      <div className="grid gap-4 grid-cols-4">
        <div className="border  md:col-span-3">
          <h2 className="text-2xl">Details comeing here</h2>
          <h2>
            Job Description: <span>{job.job_description}</span>
          </h2>
          <p>
            Job Responsibility: <span>{job.job_responsibility}</span>
          </p>
          <p>
            Educational Requirements:
            <span>{job.educational_requirements}</span>
          </p>
          <p>
            Experiences::
            <span>{job.experiences}</span>
          </p>
        </div>
        <div className="border md:grid-cols-1">
          <h4 className="text-lg">Side details</h4>
          <button>Apply now</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
