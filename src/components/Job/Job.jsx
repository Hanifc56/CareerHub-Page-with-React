import { GoLocation } from "react-icons/go";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="card  bg-base-100 border border-[#E8E8E8] shadow-xl">
      <figure className="px-10 pt-10">
        <img src={logo} alt="Shoes" className=" w-100" />
      </figure>
      <div className="card-body items-center text-center ">
        <h2 className="font-extrabold text-2xl">{job_title}</h2>
        <p className="text-[#757575] text-lg font-semibold">{company_name}</p>
        <div>
          <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">
            {remote_or_onsite}
          </button>
          <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">
            {job_type}
          </button>
        </div>
        <div className="flex my-4">
          <h2 className="flex text-lg font-semibold">
            <GoLocation className="text-2xl mr-2" />
            {location}
          </h2>
          <h2 className="flex ml-4 text-lg font-semibold">
            <HiOutlineCurrencyDollar className="text-2xl mr-2" />
            {salary}
          </h2>
        </div>
        <div className="card-actions ">
          <Link to={`/job/${id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
