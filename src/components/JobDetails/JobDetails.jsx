import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GrLocation } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { LuPhone } from "react-icons/lu";
import { CiCalendarDate } from "react-icons/ci";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { useLoaderData, useParams } from "react-router-dom";
import DetailsBanner from "../DetailsBanner/DetailsBanner";
import { saveJobApplication } from "../../utility/localstorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  console.log(job, id);

  const handleJobDetails = () => {
    saveJobApplication(idInt);
    toast("Application Sumbited!");
  };
  return (
    <div>
      <DetailsBanner details={"Job Details"}></DetailsBanner>
      <div className="grid gap-4 grid-cols-4">
        <div className="p-4  md:col-span-3">
          <p className="font-extrabold text-[#1A1919] ">
            Job Description:
            <span className="font-medium text-[#757575] block">
              {job.job_description}
            </span>
          </p>
          <p className="font-extrabold text-[#1A1919] my-6">
            Job Responsibility:
            <span className="font-medium text-[#757575] block">
              {job.job_responsibility}
            </span>
          </p>
          <p className="font-extrabold text-[#1A1919]">
            Educational Requirements:
            <span className="font-medium text-[#757575] block my-3">
              {job.educational_requirements}
            </span>
          </p>
          <p className="font-extrabold text-[#1A1919] my-6">
            Experiences:
            <span className="font-medium text-[#757575] block my-3">
              {job.experiences}
            </span>
          </p>
        </div>
        <div className=" my-6 w-full md:grid-cols-1">
          <div className="rounded-lg bg-[#c9cce1] p-4">
            <h4 className="text-xl text-[#1A1919] font-extrabold border-b-2 border-b-[#9873FF] pb-5">
              Job Details
            </h4>
            <p className="font-bold text-xl text-[#474747] py-4">
              {" "}
              <HiOutlineCurrencyDollar className="text-2xl text-[#7E90FE] inline mr-2" />
              Salary :
              <span className="font-medium text-xl text-[#757575]">
                {job.salary}
              </span>
            </p>
            <p className="font-bold text-xl text-[#474747] pb-5">
              <CiCalendarDate className="text-2xl text-[#7E90FE] inline mr-2" />
              Job Title :{" "}
              <span className="font-medium text-xl text-[#757575]">
                {job.job_title}
              </span>
            </p>
            <h4 className="text-xl text-[#1A1919] font-extrabold border-b-2 border-b-[#9873FF] pb-5">
              Contact Information
            </h4>

            <p className="font-bold text-xl text-[#474747] py-4">
              <LuPhone className="text-2xl text-[#7E90FE] inline mr-2" />
              Phone :{" "}
              <span className="font-medium text-xl text-[#757575]">
                {job.contact_information.phone}
              </span>
            </p>
            <p className="font-bold text-xl text-[#474747]">
              <HiOutlineMail className="text-2xl text-[#7E90FE] inline mr-2" />
              Email :{" "}
              <span className="font-medium text-xl text-[#757575]">
                {job.contact_information.email}
              </span>
            </p>
            <p className="font-bold text-xl text-[#474747] py-4">
              <GrLocation className="text-2xl text-[#7E90FE] inline mr-2" />
              Address :
              <span className="font-medium text-xl text-[#757575]">
                {job.contact_information.address}
              </span>
            </p>
          </div>
          <div className=" flex rounded-lg my-6 bg-[#9873FF]">
            <button
              onClick={handleJobDetails}
              className=" text-xl font-bold text-white my-4 mx-auto"
            >
              Apply now
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
